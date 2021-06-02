import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child1',
  templateUrl: './home-child1.component.html',
  styleUrls: ['./home-child1.component.css']
})
export class HomeChild1Component implements OnInit {

  
  @Input() emp!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
