import UsersService, { User } from '#root/adapters/UsersService'
import { UserSessionType } from '#root/graphql/types'
import { userSession } from './Query'

const UserSession = {
  user: async (userSession: UserSessionType) => {
    return await UsersService.fetchUser({ userId: userSession.userId })
  },
}

export default UserSession
