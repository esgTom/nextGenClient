import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { MetaDataRoutingModule } from './meta-data-routing.module';
import { ImportComponent } from './import/import.component';
import { UpdateComponent } from './update/update.component';
import { MetaDataComponent } from './meta-data.component';

@NgModule({
  imports: [
    CommonModule,
    MetaDataRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ImportComponent, UpdateComponent, MetaDataComponent]
})
export class MetaDataModule { }
