import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationComponent } from './generation/generation.component';
import { NextGenRouteResolveGuard } from './services/next-gen-route.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'codes', component: GenerationComponent, resolve: { codes: NextGenRouteResolveGuard}   },
    { path: 'metadata', loadChildren: 'app/meta-data/meta-data.module#MetaDataModule'},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ NextGenRouteResolveGuard ]
})
export class AppRoutingModule { }
