import { Box } from '@chakra-ui/layout'
import MusicMenu from './MusicMenu'
import NavMenu from './NavMenu'
import * as Icons from './../icons'

const SideBar = () => {
  return (
    <Box h="calc(100vh - 90px)" bg="black" color="gray" paddingTop="24px">
      <Box color="white" paddingX="24px" marginBottom="24px">
        <Icons.SpotifyIcon />
      </Box>
      <NavMenu />
      <MusicMenu />
    </Box>
  )
}

export default SideBar
