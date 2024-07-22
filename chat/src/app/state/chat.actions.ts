import { createAction, props } from '@ngrx/store';

export const sendMessage = createAction('[Chat] Send Message', props<{ message: string }>());
export const messageReceived = createAction('[Chat] Message Received', props<{ message: string }>());
