import { StateSchema } from 'app/providers/Store'

export const getUserAuthData = (state: StateSchema) => state.user.authData
