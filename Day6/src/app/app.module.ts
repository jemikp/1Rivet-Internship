import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeChild1Component } from './components/home/home-child1/home-child1.component';
import { HomeChild2Component } from './components/home/home-child2/home-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChild1Component,
    HomeChild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
