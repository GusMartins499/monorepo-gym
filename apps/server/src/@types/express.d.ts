enum USER_ROLE {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  PROFESSOR = 'PROFESSOR'
}

interface TokenPayload {
  id: string
  role: USER_ROLE
}
declare namespace Express {
  export interface Request {
    user: TokenPayload;
  }
}