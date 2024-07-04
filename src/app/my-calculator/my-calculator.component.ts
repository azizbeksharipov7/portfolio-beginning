import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.css'
})
export class MyCalculatorComponent {
  first: number=1;
  second:number=1;

  operation: string="+";

  operations: string[]=["+", "-", "*", "/"]
  
  result?: number;
  calc(){
    switch(this.operation) {
     case '+':
      this.result=this.first+this.second;
      break;
      case '-':
        this.result=this.first-this.second;
        break;
        case "*":
          this.result=this.first*this.second;
          break;
          case "/":
            this.result=this.first/this.second;
            

      
    }
  }

}
