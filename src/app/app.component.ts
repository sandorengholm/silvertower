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
      if(this.firstNumber === eyes){
        this.resetFirstDice();
      } else {
        this.firstNumber = eyes;
      }
    } else {
      if(this.secondNumber === eyes){
        this.resetSecondDice();
      } else {
        this.secondNumber = eyes;
      }
    }
    this.passageNumber = this.firstNumber * 10 + this.secondNumber;
  }
  public resetAllDice(){
      this.firstNumber = 0;
      this.secondNumber = 0;
  }
  public resetFirstDice(){
    this.firstNumber = 0;
  }
  public resetSecondDice(){
    this.secondNumber = 0;
  }
}
