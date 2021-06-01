import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/helper-service.service';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent implements OnInit {

  public value: number = 10;
  //public valueToDecrement: number = 10;
  public valuetoprint = 0;

  constructor(public helperService: HelperServiceService) { }

  ngOnInit(): void {
  }

  incrementValue(){
    this.value = this.helperService.incrementValueOf(this.value);
  }

  decrementValue(){
    this.value = this.helperService.decrementValue(this.value);
  }

}
