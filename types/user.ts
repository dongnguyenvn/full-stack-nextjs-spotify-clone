export type UserInputAuth = {
    email : string
    password : string
}

export type MeApiResposive = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    firstName: string
    lastName: string
    password: string
    playlistCount : number
  }
