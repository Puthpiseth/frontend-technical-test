import { createSlice } from '@reduxjs/toolkit';
import { StateNameEnum } from './enum';

export interface ConversationActionType {
  payload: string;
}

export interface ConversationState {
  recipientName: string;
}

const initialState: ConversationState = {
  recipientName: '',
};

export const userSlice = createSlice({
  name: StateNameEnum.USER,
  initialState,
  reducers: {
    getUserName(state: ConversationState, action: ConversationActionType) {
      state.recipientName = action.payload;
      return state;
    },
    resetUserName() {
      return initialState;
    },
  },
});

export const { getUserName, resetUserName } = userSlice.actions;
export default userSlice.reducer;
