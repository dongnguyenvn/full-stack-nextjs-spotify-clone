import { Box, LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { usePlaylist } from '../../hooks'
import { scrollBar } from '../../theme/custom'

const PlaylistMenu = () => {
  const { playLists, isLoading, isError } = usePlaylist()
  if (isError) return <p>Error !</p>
  if (isLoading) return <p>Loading ...</p>
  return (
    <Box overflowY="auto" css={scrollBar} color="gray.400">
      <List spacing={2}>
        {playLists.map((pl) => (
          <ListItem key={pl.id} paddingX="24px">
            <LinkBox>
              <Link href="#" passHref>
                <LinkOverlay>{pl.name}</LinkOverlay>
              </Link>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default PlaylistMenu
