import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';

// To use components in multiple modules:
// 1. Declare and export the component in parent module.
// 2. Import module into target module - no declaration is necessary in 
//    the target module

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent]
})
export class NextGenCommonModule { }
