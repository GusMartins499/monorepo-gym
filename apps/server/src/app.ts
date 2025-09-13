import "reflect-metadata"
import './database/connection'

import express, { Express } from 'express'
import { usersRoutes } from './controllers/users/routes'

export const app: Express = express()

app.use(express.json())

app.use('/users', usersRoutes)
