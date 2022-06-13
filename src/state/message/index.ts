import { createSlice } from '@reduxjs/toolkit';
import { Message } from '../../types/message';
import { fetchMessages } from '../asyncRequest';
import { StateMessageEnum } from './enum';

export interface MessageActionType {
  payload: Message;
}

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

export const userSlice = createSlice({
  name: StateMessageEnum.MESSAGE,
  initialState,
  reducers: {
    addMessage(state: MessageState, action: MessageActionType) {
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

export const { addMessage } = userSlice.actions;
export default userSlice.reducer;
