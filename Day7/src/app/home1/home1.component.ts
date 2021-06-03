import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  public fruits!: string[];
  public inputText!: string;
  public recievedFruitToUpdate!: string;
  public disableAdd: boolean = false;
  public disableUpdate: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.declareVariables();
  }

  public declareVariables(): void {
    this.fruits = ['mango', 'banana', 'apple', 'pine-apple', 'grapes', 'watermelon', 'cherry', 'stawberry', 'orange', 'blueberries']
  }

  public updateFruitValue(value: any): void{
    this.recievedFruitToUpdate = value;
    this.inputText = value;    
    this.disableUpdate = false;
    this.disableAdd = true;
  }

  public updateFruit(data: string): void{
    const x = this.fruits.indexOf(this.recievedFruitToUpdate);
    this.fruits[x] = data;
    this.disableUpdate = false;
    this.disableAdd = false;
  }

  public addFruit(data: string): void{
    this.fruits.push(data);
  }
}
