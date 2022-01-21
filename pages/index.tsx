import { Box, Center, Flex, Text } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage, NextPageContext } from 'next'
import GradientLayout from '../components/GradientLayout'
import { useMe } from '../hooks'
import prisma from '../lib/prisma'
import type { Artist } from '../types/artist'

type HomeProps = {
  artists: Artist[]
}

const Home: NextPage<HomeProps> = ({ artists }) => {
  const { me, isLoading, isError } = useMe()
  if (isLoading) return <Center>loading ..</Center>
  if (isError) return <p>error ..</p>
  return (
    <>
      <GradientLayout
        color="blue"
        subtitle="playlist"
        title={`${me.firstName} ${me.lastName}`}
        description={`${me.playlistCount} playlist`}
      >
        <Box color="white" padding="40px">
          <Box marginBottom="20px">
            <Text fontSize="2xl" fontWeight="bold">
              Top artist this month
            </Text>
            <Text fontSize="sm">only visible to you</Text>
          </Box>
          <Flex>
            {artists.map((a) => (
              <Box>{a.name}</Box>
            ))}
          </Flex>
        </Box>
      </GradientLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})
  return {
    props: { artists },
  }
}

export default Home
