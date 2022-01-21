import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { themes } from '../theme'
import PlayerLayout from '../components/PlayerLayout'
import { Page } from '../types/page'
import { StoreProvider } from 'easy-peasy'
import { store } from '../lib/store'

const theme = extendTheme(themes)

type MyAppProps = AppProps & {
  Component: Page
}
// type MyAppProps = AppProps & {
//   Component : NextComponentType & {
//     AuthPage : boolean
//   }
// }
// type MyAppProps = AppProps & {
//   Component : NextPage & {
//     AuthPage : boolean
//   }
// }

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {Component.AuthPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  )
}

export default MyApp
