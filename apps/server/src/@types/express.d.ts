interface TokenPayload {
  id: string
  role: 'ADMIN' | 'STUDENT' | 'PROFESSOR'
}
declare namespace Express {
  export interface Request {
    user: TokenPayload;
  }
}