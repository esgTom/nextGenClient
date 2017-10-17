import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NextGenCommonModule } from './_common/nextgen-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationComponent } from './generation/generation.component';
import { NextGenDataService } from './services/next-gen-data.service';
import { HomeComponent } from './home/home.component';
import { ErrorService } from './_core/error-service.service';
import { ProjectBOService } from './_business-objects/project-bo.service';

@NgModule({
  declarations: [
    AppComponent,
    GenerationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CommonModule,
    NextGenCommonModule
  ],
  providers: [NextGenDataService, ErrorService, ProjectBOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
