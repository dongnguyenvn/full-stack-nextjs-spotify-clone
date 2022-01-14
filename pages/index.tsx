import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GradientLayout from '../components/GradientLayout'
import { useMe } from '../hooks'

const Home: NextPage = () => {
  // const { user, isLoading, isError } = useMe()
  // if (isLoading) return <p>loading ..</p>
  // if (isError) return <p>error ..</p>
  return <GradientLayout color='blue' subtitle='playlist' title='Work music but thượng đẳng' description='15 public playlist'/>
}

export default Home
