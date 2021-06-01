import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor() { }


  getFruits() {
    return ["mango", 'banana', 'apple', 'pine-apple', 'grapes', 'watermelon', 'cherry', 'stawberry', 'orange', 'blueberries']
  }

  incrementValueOf(value: number){
    return value+=1;
  }

  decrementValue(value: number){
    return value-=1;
  }

  public arr = ["mango", 'banana', 'apple', 'pine-apple', 'grapes', 'watermelon', 'cherry', 'stawberry', 'orange', 'blueberries'];
  
  addFruits(newElement: string) { 
    this.arr.push(newElement);
  }

  getAddedFruits(){
    return this.arr;
  }

}
