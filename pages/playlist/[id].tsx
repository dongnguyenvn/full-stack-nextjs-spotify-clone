import { color } from '@chakra-ui/react'
import { GetServerSideProps, NextPageContext } from 'next'
import { NextResponse } from 'next/server'
import { FC } from 'react'
import GradientLayout from '../../components/GradientLayout'
import { validateToken } from '../../lib/auth'
import prisma from '../../lib/prisma'
import { Playlist } from '../../types/playlist'

type PlaylistProps = {
  playlist: Playlist
}

const getBgColor = (id: number) => {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'gray',
    'teal',
  ]
  return colors[id % colors.length]
  //   return colors[id-1] || colors[Math.floor(Math.random() * colors.length)]
}

const PlaylistPage: FC<PlaylistProps> = ({ playlist }) => {
  const color = getBgColor(playlist.id)
  return (
    <GradientLayout
      color={color}
      subtitle="playlist"
      title={playlist.name}
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      {playlist.name}
    </GradientLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = validateToken(req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN)
  const [playlist] = await prisma.playlist.findMany({
    where: { id: Number(query.id), userId: id },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  })
  return {
    props: { playlist },
  }
}

export default PlaylistPage
