export enum USER_ROLE {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  PROFESSOR = 'PROFESSOR'
}

export const USER_ROLE_TO_LABEL: Record<USER_ROLE, string> = {
  [USER_ROLE.ADMIN]: 'administrador',
  [USER_ROLE.PROFESSOR]: 'Professor',
  [USER_ROLE.STUDENT]: 'Aluno',
}