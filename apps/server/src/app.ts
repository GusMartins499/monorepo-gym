import "reflect-metadata"
import './database/connection'

import express, { Express } from 'express'
import { usersRoutes } from './controllers/users/routes'
import { imcRoutes } from "./controllers/imc/routes"

export const app: Express = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/imc', imcRoutes)
