import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './component/form/form';

@NgModule({
  imports: [
    CommonModule,
    FormComponent
  ],
  declarations: [FormComponent]
})
export class FormModule { }
