import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryGameComponent } from './memory-game/memory-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MemoryGameComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory-game';
}
