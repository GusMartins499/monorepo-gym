import { z } from "zod/v4";

const envSchema = z.object({
  JWT_SECRET: z.string(),
  MSSQL_SA_PASSWORD: z.string()
});

export type EnvConfig = z.infer<typeof envSchema>;

export function loadEnvConfig() {
  const _env = envSchema.safeParse(process.env)

  if (_env.success === false) {
    console.error('Invalid enviroment variables', z.treeifyError(_env.error))

    throw new Error('Invalid enviroment variables')
  }

  const env = _env.data

  return env
}