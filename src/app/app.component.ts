import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  passageNumber: number = 0;

  public setDice(row, eyes){
    if(row === 1){
      this.firstNumber = eyes;
    } else {
      this.secondNumber = eyes;
    }
    this.passageNumber = this.firstNumber * 10 + this.secondNumber;
  }
  public resetDice(){
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
}
