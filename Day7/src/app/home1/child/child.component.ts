import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fruits!: string[];

  @Output() sendFruitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }  

  public deleteFruit(value: string): void{
    const x = this.fruits.indexOf(value);
    this.fruits.splice(x,1);
  }

  public editFruit(value: string): void {
    this.sendFruitEvent.emit(value);
  }
  
}
