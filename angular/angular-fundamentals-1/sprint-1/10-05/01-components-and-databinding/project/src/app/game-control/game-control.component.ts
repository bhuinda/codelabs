import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  isEven = false;
  interval;
  lastCount = 1;

  onGameStart() {
    this.interval = setInterval(() => {
      this.checkIfEven();
      console.log(this.lastCount)
      this.lastCount += 1;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.interval);
  }

  checkIfEven() {
    if (this.lastCount % 2 === 0) { this.evenNumbers.push(this.lastCount) }
    else { this.oddNumbers.push(this.lastCount) }
  }
}
