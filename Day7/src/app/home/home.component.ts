import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public fruits!: string[];
  public fruitRecieved: any;
  public valueToDiaplay: any;

  constructor() { }

  ngOnInit(): void {
    this.declareVariables();
  }

  public declareVariables(): void {
    this.fruits = ['mango', 'banana', 'apple', 'pine-apple', 'grapes', 'watermelon', 'cherry', 'stawberry', 'orange', 'blueberries']
  }

  public addFruit(newFruit: string): void {
    this.fruits.push(newFruit);
  }

  public recieveFruit(value: any): void{
    console.log("sdf");
    this.fruitRecieved = value;
    console.log('fdsf')
  }

  public childData(data: any): void{
    this.fruitRecieved = data;
    this.valueToDiaplay = data;
  }
 
  public updateValue(value: string): void{
    var x = this.fruits.indexOf(this.fruitRecieved);
    this.fruits[x] = value;
  }
}
