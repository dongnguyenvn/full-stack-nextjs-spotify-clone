import {
  Text,
  Box,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
  Divider,
  Center,
  Flex,
} from '@chakra-ui/layout'
import Link from 'next/link'
import { MdPlaylistAdd, MdFavorite } from 'react-icons/md'
import { useRouter } from 'next/router'
import {
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  HomeActiveIcon,
  SpotifyIcon,
  SearchActiveIcon,
  LibraryActiveIcon,
} from './icon'

const navMenus = [
  {
    name: 'Home',
    icon: HomeIcon,
    iconActive: HomeActiveIcon,
    route: '/',
  },
  {
    name: 'Search',
    icon: SearchIcon,
    iconActive: SearchActiveIcon,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: LibraryIcon,
    iconActive: LibraryActiveIcon,
    route: '/library',
  },
]

const SideBar = () => {
  const route = useRouter()

  return (
    <Box h="calc(100vh - 100px)" bg="black" color="gray" paddingTop="24px">
      <Box color="white" paddingX="24px" marginBottom="24px">
        <SpotifyIcon />
      </Box>
      <List paddingX="8px" spacing={2}>
        {navMenus.map((m) => (
          <ListItem
            key={m.name}
            paddingX="16px"
            bg={route.asPath === m.route ? 'gray.900' : ''}
            borderRadius="base"
          >
            <LinkBox>
              <Link href={m.route} passHref>
                <LinkOverlay
                  display="flex"
                  alignItems="center"
                  h="40px"
                  color="white"
                  gap="16px"
                >
                  <ListIcon
                    as={route.asPath === m.route ? m.iconActive : m.icon}
                  />
                  <Text fontSize="14px" fontWeight="bold">
                    {m.name}
                  </Text>
                </LinkOverlay>
              </Link>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SideBar
