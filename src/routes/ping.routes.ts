import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from 'fastify'
import { StatusCodes } from 'http-status-codes'

export default function (
  fastify: FastifyInstance,
  options?: FastifyServerOptions,
  done?: any
): void {
  fastify.route({
    method: 'GET',
    url: '/ping',
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      reply.status(StatusCodes.OK).send({ ping: 'pong' })
    },
  })

  done()
}
