import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DataSource } from 'typeorm'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "Docker@123",
  database: "docker",
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, 'entity', '*.ts')],
  migrations: [path.join(__dirname, 'migration', '*.ts')],
  subscribers: [],
  extra: {
    trustServerCertificate: true
  },
})
