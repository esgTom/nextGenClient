import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MetaDataRoutingModule } from './meta-data-routing.module';
import { ImportComponent } from './import/import.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    CommonModule,
    MetaDataRoutingModule,
    FormsModule
  ],
  declarations: [ImportComponent, UpdateComponent]
})
export class MetaDataModule { }
