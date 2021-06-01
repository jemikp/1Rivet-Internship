import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayFruitsComponent } from './components/display-fruits/display-fruits.component';
import { HelperServiceService } from 'src/app/helper-service.service';
import { IncrementDecrementComponent } from './components/increment-decrement/increment-decrement.component';
import { AddValueToArrayComponent } from './components/add-value-to-array/add-value-to-array.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayFruitsComponent,
    IncrementDecrementComponent,
    AddValueToArrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelperServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
