import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationComponent } from './generation/generation.component';
import { NextGenRouteResolveGuard } from './services/next-gen-route.guard';

const routes: Routes = [
  { path: 'codes', component: GenerationComponent, resolve: { codes: NextGenRouteResolveGuard}   },
  { path: '', redirectTo: 'codes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ NextGenRouteResolveGuard ]
})
export class AppRoutingModule { }
