import { AxiosInstance } from 'axios';
import { Conversation } from '../types/conversation';

export function createConversationsApi(axios: AxiosInstance) {
  return {
    async findConversations(userId: number): Promise<Conversation[]> {
      return axios({
        url: `/conversations/${userId}`,
        method: 'GET',
      }).then((response) => response.data);
    },
  };
}

export type ConversationsApi = ReturnType<typeof createConversationsApi>;
