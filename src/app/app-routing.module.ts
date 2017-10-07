import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationComponent } from './generation/generation.component';
import { NextGenRouteResolveGuard, NextGenProjectsResolveGuard } from './services/next-gen-route.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, resolve: { routeData: NextGenProjectsResolveGuard} },
    { path: 'codes', component: GenerationComponent, resolve: { codes: NextGenRouteResolveGuard} },
    { path: 'metadata', loadChildren: 'app/meta-data/meta-data.module#MetaDataModule', resolve: { routeData: NextGenProjectsResolveGuard} },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ NextGenRouteResolveGuard, NextGenProjectsResolveGuard ]
})
export class AppRoutingModule { }
