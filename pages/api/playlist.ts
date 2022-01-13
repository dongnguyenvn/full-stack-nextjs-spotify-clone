import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'

export default validateRoute(async (_, res, user) => {
    const playlist = await prisma.playlist.findMany({
        where : {userId : user.id},
        orderBy : {
            createdAt : 'asc'
        }
    })
  res.json(playlist)
})
