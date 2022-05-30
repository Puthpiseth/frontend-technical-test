import { AxiosInstance } from 'axios';
import { Message } from '../types/message';

export function createMessagesApi(axios: AxiosInstance) {
  return {
    async findMessages(ConversationId: number): Promise<Message[]> {
      return axios({
        url: `/messages/${ConversationId}`,
        method: 'GET',
      }).then((response) => response.data);
    },
    async createMessages(ConversationId: number): Promise<Message[]> {
      return axios({
        url: `/messages/${ConversationId}`,
        method: 'POST',
      }).then((response) => response.data);
    },
  };
}

export type MessagesApi = ReturnType<typeof createMessagesApi>;
