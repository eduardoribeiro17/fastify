import Fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import printRoutes from '@plugins/fastify/print-routes'
import fastifyAutoload from 'fastify-autoload'
import path from 'path'

const fastify: FastifyInstance = Fastify({
  logger: {
    prettyPrint: {
      levelFirst: false,
      translateTime: 'yyyy-MM-dd HH:mm:ss.l',
      ignore: 'pid,hostname',
    },
  },
  ignoreTrailingSlash: true,
})

fastify.register(fastifyCors, { origin: true })
fastify.register(printRoutes)
fastify.register(fastifyAutoload, {
  dir: path.join(__dirname, 'routes'),
})

const server = (port: string) => {
  try {
    fastify.listen(port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

export { server, fastify }
