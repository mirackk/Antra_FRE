import { createReducer, on } from '@ngrx/store';
import { sendMessage, messageReceived } from './chat.actions';

export interface ChatState {
  messages: string[];
}

export const initialState: ChatState = {
  messages: [],
};

export const chatReducer = createReducer(
  initialState,
  on(sendMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, `You: ${message}`],
  })),
  on(messageReceived, (state, { message }) => ({
    ...state,
    messages: [...state.messages, `Server: ${message}`],
  }))
);
