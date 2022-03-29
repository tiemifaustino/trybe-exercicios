export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CLIENT = 'SAVE_CLIENT'

export const saveEmailLogin = (email) => ({
  type: SAVE_EMAIL,
  email,
})

export const saveClient = (client) => ({
  type: SAVE_CLIENT,
  client,
})


