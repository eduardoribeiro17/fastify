import 'dotenv/config'

import { server } from './app'

const { PORT } = process.env

server(PORT)
