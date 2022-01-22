import { Box, Flex, Text } from '@chakra-ui/react'
import { useStoreState } from '../../hooks/useStore'
import Player from './Player'

const PlayerBar = () => {
  const songs = useStoreState((state) => state.activeSongs)
  const activeSong = useStoreState((state) => state.activeSong)
  return (
    <Flex h="full" paddingX="16px" alignItems="center" justify="space-between">
      {activeSong && (
        <Box color="white" width="30%">
          <Text fontSize="large">{activeSong.name}</Text>
          <Text fontSize="sm">{activeSong.artist.name}</Text>
        </Box>
      )}
      <Box width="40%">
        {activeSong && <Player activeSong={activeSong} songs={songs} />}
      </Box>
      <Box width="30%"></Box>
    </Flex>
  )
}

export default PlayerBar
