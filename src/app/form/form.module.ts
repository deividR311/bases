import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    FormComponent
  ],
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormModule { }
