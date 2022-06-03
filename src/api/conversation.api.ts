import { AxiosResponse } from 'axios';
import { Conversation } from '../types/conversation';
import axiosInstance from './request.api';

export const findConversationsByUserId = (userId: string): Promise<AxiosResponse<Conversation[]>> =>
  axiosInstance.get(`/conversations/${userId}`);

export const getConversation = (conversationsId: string): Promise<AxiosResponse<Conversation>> =>
  axiosInstance.get(`/conversations/${conversationsId}`);
