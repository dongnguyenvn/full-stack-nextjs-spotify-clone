import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'

export default validateRoute(async (_, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: { userId: user.id },
  })
  res.json({
    ...user,
    playlistCount,
  })
})
