import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { ChildComponent } from './home1/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
