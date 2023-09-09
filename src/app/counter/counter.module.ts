import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';



@NgModule({
  exports: [
    CounterComponent
  ],
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
