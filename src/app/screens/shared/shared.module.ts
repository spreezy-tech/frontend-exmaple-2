import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/components/test/test.component';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent
  ]
})
export class SharedModule { }
