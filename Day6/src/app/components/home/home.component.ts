import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees = [
    {
      name: 'abc',
      age: 24
    },
    {
      name: 'pqr',
      age: 29
    },
    {
      name: 'xyz',
      age: 35
    },
  ]
  
  public dataFromParent:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  displayStudent(data: any){
    this.dataFromParent = data;
  }

}
