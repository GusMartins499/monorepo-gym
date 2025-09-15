import "reflect-metadata"
import './database/connection'

import express, { Express } from 'express'
import { usersRoutes } from './controllers/users/routes'
import { imcRoutes } from "./controllers/imc/routes"
import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app: Express = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(cookieParser())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/imc', imcRoutes)
