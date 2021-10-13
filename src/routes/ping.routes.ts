import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { PrismaClient } from '@prisma/client'

export default function (
  fastify: FastifyInstance,
  options?: FastifyServerOptions,
  done?: any
): void {
  fastify.route({
    method: 'GET',
    url: '/ping',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const prisma = new PrismaClient()

      const allUsers = await prisma.user.findFirst()
      console.log(allUsers)
      reply.status(StatusCodes.OK).send(allUsers)
    },
  })

  done()
}
