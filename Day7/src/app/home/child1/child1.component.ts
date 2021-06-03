import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() fruits!:string[];

  @Output() name = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  } 

  sendForEdit(value: string){
    this.name.emit(value);
  }



}
