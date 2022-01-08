import { Text, List, ListItem, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Icons from './../icons'

const navMenus = [
  {
    name: 'Home',
    icon: <Icons.HomeIcon />,
    iconActive: <Icons.HomeActiveIcon />,
    route: '/',
  },
  {
    name: 'Search',
    icon: <Icons.SearchIcon />,
    iconActive: <Icons.SearchActiveIcon />,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: <Icons.LibraryIcon />,
    iconActive: <Icons.LibraryActiveIcon />,
    route: '/library',
  },
]

const NavMenu = () => {
  const router = useRouter()
  const isActive = (route: string) => {
    return router.asPath === route
  }

  return (
    <List paddingX="8px" spacing={0.5}>
      {navMenus.map((m) => (
        <ListItem
          key={m.name}
          paddingX="16px"
          bg={isActive(m.route) ? 'gray.850' : ''}
          rounded="base"
        >
          <LinkBox>
            <Link href={m.route} passHref>
              <LinkOverlay
                display="flex"
                alignItems="center"
                h="40px"
                color={isActive(m.route) ? 'white' : 'gray.400'}
                gap="16px"
              >
                {isActive(m.route) ? m.iconActive : m.icon}
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

export default NavMenu
