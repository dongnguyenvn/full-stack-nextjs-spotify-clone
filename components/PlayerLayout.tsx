import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import SideBar from './SideBar'
import PlayerBar from './PlayerBar'

const PlayerLayout: FC = ({ children }) => {
  return (
    <Box bg="gray.100" h="100vh">
      <Box position="absolute" top={0} left={0} w="240px">
        <SideBar />
      </Box>
      <Box
        h="calc(100vh - 90px)"
        bg="gray.1000"
        marginBottom="90px"
        marginLeft="240px"
      >
        {children}
      </Box>
      <Box
        h="90px"
        position="absolute"
        bottom={0}
        left={0}
        bg="gray.900"
        w="full"
      >
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default PlayerLayout
