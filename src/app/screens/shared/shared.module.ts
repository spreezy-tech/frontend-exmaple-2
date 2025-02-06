import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/components/test/test.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';



@NgModule({
  declarations: [
    TestComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent,
    PopupComponent
  ]
})
export class SharedModule { }
