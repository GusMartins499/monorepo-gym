export enum USER_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const USER_STATUS_TO_LABEL: Record<USER_STATUS, string> = {
  [USER_STATUS.ACTIVE]: 'Ativo',
  [USER_STATUS.INACTIVE]: 'Inativo',
}