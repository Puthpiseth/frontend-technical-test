import { createSlice } from '@reduxjs/toolkit';
import { Message } from '../../types/message';
import { fetchMessages } from '../asyncRequest';
import { StateNameEnum } from './enum';

export interface UserActionType {
  payload: string;
}

export interface MessageActionType {
  payload: Message;
}

export interface ConversationState {
  recipientName: string;
  messages: Message[];
}

const initialState: ConversationState = {
  recipientName: '',
  messages: [],
};

export const userSlice = createSlice({
  name: StateNameEnum.USER,
  initialState,
  reducers: {
    getUserName(state: ConversationState, action: UserActionType) {
      state.recipientName = action.payload;
      return state;
    },
    resetState() {
      return initialState;
    },
    addMessage(state: ConversationState, action: MessageActionType) {
      state.messages = state.messages.concat(action.payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = state.messages.concat(action.payload);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(fetchMessages.rejected, (state, _action) => {
        state.messages = [];
      });
  },
});

export const { getUserName, resetState, addMessage } = userSlice.actions;
export type GetUserNameType = ReturnType<typeof getUserName>;
export default userSlice.reducer;
