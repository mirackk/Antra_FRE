import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { sendMessage, messageReceived } from './chat.actions';
import { map, mergeMap } from 'rxjs/operators';
import { WebSocketService } from '../services/websocket.service';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions, private websocketService: WebSocketService) {}

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendMessage),
      mergeMap(async (action) => this.websocketService.sendMessage(action.message))
    ),
    { dispatch: false }
  );

  messageReceived$ = createEffect(() =>
    this.websocketService.messages$.pipe(
      map(message => messageReceived({ message }))
    )
  );
}
