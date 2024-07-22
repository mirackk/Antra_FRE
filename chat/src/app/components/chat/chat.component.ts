import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/app/state/chat.reducer';
import { sendMessage } from 'src/app/state/chat.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages$: Observable<string[]>;
  newMessage: string = '';

  constructor(private store: Store<{ chat: ChatState }>) {
    this.messages$ = store.select(state => state.chat.messages);
  }

  onSendMessage() {
    if (this.newMessage.trim()) {
      this.store.dispatch(sendMessage({ message: this.newMessage }));
      this.newMessage = '';
    }
  }
}
