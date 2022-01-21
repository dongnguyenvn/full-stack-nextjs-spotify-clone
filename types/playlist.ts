import type { Song } from './song'

export type PlaylistApiResposive = {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  userId: number
}

export type Playlist = {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  userId: number
  songs: Song[]
}
