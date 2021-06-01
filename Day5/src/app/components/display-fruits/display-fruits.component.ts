import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/helper-service.service';

@Component({
  selector: 'app-display-fruits',
  templateUrl: './display-fruits.component.html',
  styleUrls: ['./display-fruits.component.css']
})
export class DisplayFruitsComponent implements OnInit {

  public fruits: any;

  constructor(public helperService: HelperServiceService) { 
    this.fruits = helperService.getFruits();
   }

  ngOnInit(): void {
  }

}
