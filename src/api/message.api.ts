import { AxiosResponse } from 'axios';
import { Message } from '../types/message';
import axiosInstance from './request.api';

export const findMessagesByConversationId = (conversationId: number): Promise<AxiosResponse<Message[]>> =>
  axiosInstance.get(`/messages/${conversationId}`);
