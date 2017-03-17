import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FormComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
