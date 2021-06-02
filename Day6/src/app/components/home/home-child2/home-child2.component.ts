import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-child2',
  templateUrl: './home-child2.component.html',
  styleUrls: ['./home-child2.component.css']
})
export class HomeChild2Component implements OnInit {

  students = [
    {
      name: "ram",
      roll_no : 101
    },
    {
      name: "shyam",
      roll_no : 102
    },
    {
      name: "sita",
      roll_no : 103
    },
    {
      name: "gita",
      roll_no : 104
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  @Output() studentsData = new EventEmitter();  

  sendDataToParent(){
    this.studentsData.emit(this.students);
  }

}
