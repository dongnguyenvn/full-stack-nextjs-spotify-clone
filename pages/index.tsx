import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useMe } from '../hooks'

const Home: NextPage = () => {
  const { user, isLoading, isError } = useMe()
  if(isLoading) return <p>loading ..</p>
  if(isError) return <p>error ..</p>
  return (
    <Text color="gray.500" fontWeight="100">
      {user.id}
    </Text>
  )
}

export default Home
