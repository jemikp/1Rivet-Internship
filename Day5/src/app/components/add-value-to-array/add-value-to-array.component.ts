import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/helper-service.service';

@Component({
  selector: 'app-add-value-to-array',
  templateUrl: './add-value-to-array.component.html',
  styleUrls: ['./add-value-to-array.component.css']
})
export class AddValueToArrayComponent implements OnInit {

  public fruits: any;
  
  constructor(public helperService: HelperServiceService) {
    this.fruits = helperService.getAddedFruits();
   }

  ngOnInit(): void {
  }

  addNewElement(newValue: string){
    this.helperService.addFruits(newValue);
  }

}
