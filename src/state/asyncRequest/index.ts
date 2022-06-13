import { createAsyncThunk } from '@reduxjs/toolkit';
import { findMessagesByConversationId } from '../../api';
import { AsyncRequestEnum } from './enum';

export const fetchMessages = createAsyncThunk(AsyncRequestEnum.FETCH_MESSAGES, async (conversationId: number) => {
  const response = await findMessagesByConversationId(conversationId);
  return response.data;
});
