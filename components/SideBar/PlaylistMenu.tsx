import { Box, LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/layout'
import Link from 'next/link'
import { scrollBar } from '../../theme/custom'

const playlists = new Array(15)
  .fill(1)
  .map((_, i) => ({ name: `My playlist #${i + 1}` }))

const PlaylistMenu = () => {
  return (
    <Box overflowY="auto" css={scrollBar} color='gray.400'>
      <List spacing={2}>
        {playlists.map((pl, i) => (
          <ListItem key={i} paddingX='24px'>
            <LinkBox>
              <Link href="/">
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
