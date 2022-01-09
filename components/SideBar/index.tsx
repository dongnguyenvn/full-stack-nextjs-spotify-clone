import { Box, Flex } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import MusicMenu from './MusicMenu'
import NavMenu from './NavMenu'
import * as Icons from './../icons'
import PlaylistMenu from './PlaylistMenu'


const SideBar = () => {
  return (
    <Box h="calc(100vh - 90px)" bg="black" paddingTop="24px">
      <Flex direction="column" h="100%">
        <Box color="white" paddingX="24px" marginBottom="24px">
          <Icons.SpotifyIcon />
        </Box>
        <NavMenu />
        <MusicMenu />
        <Box paddingX="24px" paddingY="8px">
          <Divider borderColor="gray.800" borderWidth="1px" />
        </Box>
        <PlaylistMenu />
      </Flex>
    </Box>
  )
}

export default SideBar
