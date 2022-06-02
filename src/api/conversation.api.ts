import { AxiosResponse } from 'axios';
import { Conversation } from '../types/conversation';
import axiosInstance from './request.api';

export const findConversations = (userId: number): Promise<AxiosResponse<Conversation[]>> =>
  axiosInstance.get(`/conversations/${userId}`);
