import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const EMOJIS = ['🐵', '🐶', '🦊', '🐱', '🦁', '🐯', '🐴', '🦄', '🦓', '🦌', '🐮', '🐷', '🐭', '🐹', '🐻', '🐨', '🐼', '🐽', '🐸', '🐰', '🐙'];

@Component({
  imports: [NgFor,NgIf],
  selector: 'app-memory-game',
  standalone: true,
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {
  emojis = [...EMOJIS, ...EMOJIS];  // Duplicate the emojis array
  shuffledEmojis: string[] = [];
  flippedCards: { index: number, emoji: string }[] = [];
  matchedCards: boolean[] = [];
  canFlip = true;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.emojis = this.getRandomEmojis(8);
    this.shuffledEmojis = this.shuffleArray([...this.emojis, ...this.emojis]);
    this.matchedCards = Array(this.shuffledEmojis.length).fill(false);
    this.flippedCards = [];
    this.canFlip = true;
  }

  getRandomEmojis(count: number): string[] {
    const shuffled = EMOJIS.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => 0.5 - Math.random());
  }

  flipCard(index: number) {
    if (this.canFlip && !this.matchedCards[index] && !this.flippedCards.some(card => card.index === index)) {
      this.flippedCards.push({ index, emoji: this.shuffledEmojis[index] });

      if (this.flippedCards.length === 2) {
        this.canFlip = false;
        setTimeout(() => {
          this.checkMatch();
        }, 1000);
      }
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    if (card1.emoji === card2.emoji) {
      this.matchedCards[card1.index] = true;
      this.matchedCards[card2.index] = true;
    }
    this.flippedCards = [];
    this.canFlip = true;
  }

  isCardFlipped(index: number): boolean {
    return this.matchedCards[index] || this.flippedCards.some(card => card.index === index);
  }

  playAgain() {
    this.startGame();
  }
}
