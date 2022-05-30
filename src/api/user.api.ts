import { AxiosInstance } from 'axios';
import { User } from '../types/user';

export function createUsersApi(axios: AxiosInstance) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async findUsers(params?: any): Promise<User[]> {
      return axios({
        url: '/users',
        method: 'GET',
        params,
      }).then((response) => response.data);
    },
    async getUserById(userId: number): Promise<User[]> {
      return axios({
        url: `/users/${userId}`,
        method: 'GET',
      }).then((response) => response.data);
    },
  };
}

export type UsersApi = ReturnType<typeof createUsersApi>;
