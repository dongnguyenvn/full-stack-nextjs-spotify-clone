import {
  Text,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  Center,
} from '@chakra-ui/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Icons from './../icons'

const musicMenus = [
  {
    name: 'Create Playlist',
    route: '/playlist',
    icon: <Icons.AddIcon />,
    iconColor: 'black',
    iconBackGround: 'white',
  },
  {
    name: 'Liked Songs',
    icon: <Icons.HeartIcon />,
    route: '/collection/track',
    iconColor: 'white',
    iconBackGround: `linear-gradient(135deg,#450af5,#c4efd9)`,
  },
  {
    name: 'Your Episodes',
    icon: <Icons.EpisodesIcon />,
    route: '/collection/episodes',
    iconColor: 'white',
    iconBackGround: '#006450',
  },
]

const MusicMenu = () => {
  const router = useRouter()
  const isActive = (route: string) => {
    return router.asPath === route
  }

  return (
    <List paddingX="8px" spacing={0.5} marginTop="24px">
      {musicMenus.map((m) => (
        <ListItem key={m.name} paddingX="16px" rounded="base">
          <LinkBox>
            <Link href={m.route} passHref>
              <LinkOverlay
                display="flex"
                alignItems="center"
                h="40px"
                gap="16px"
                color={isActive(m.route) ? `white ` : `gray.200`}
                opacity={isActive(m.route) ? '' : '0.7'}
                _hover={isActive(m.route) ? {} : { opacity: '1' }}
                transition="opacity ease-in-out 200ms"
              >
                <Center
                  h="24px"
                  w="24px"
                  color={m.iconColor}
                  bg={m.iconBackGround}
                  rounded="1px"
                >
                  {m.icon}
                </Center>
                <Text fontSize="14px" fontWeight="bold">
                  {m.name}
                </Text>
              </LinkOverlay>
            </Link>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  )
}

export default MusicMenu
