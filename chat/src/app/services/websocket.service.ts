import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  messages$ = this.socket.fromEvent<string>('message');

  constructor(private socket: Socket) {}

  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }
}
