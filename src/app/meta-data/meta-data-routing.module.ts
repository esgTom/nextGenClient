import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportComponent } from './import/import.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    { path: '', component: ImportComponent},
    { path: 'update', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaDataRoutingModule { }
