import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'
import { UserApiResposive } from '../types/user'

type HandelType = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: UserApiResposive
) => void | Promise<void>

type Decode = {
  id: number
}

const validateRoute = (handle: HandelType) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN
    if (token) {
      let user
      try {
        const { id } = jwt.verify(token, 'hello') as Decode
        user = await prisma.user.findUnique({
          where: { id },
        })
        if (!user) throw new Error('Not real user')
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not Authorizied' })
        return
      }

      return handle(req, res, user)
    }
  }
}

const validateToken = (token: string) => {
  const user = jwt.verify(token, 'hello') as UserApiResposive
  return user
}

export { validateRoute, validateToken }
