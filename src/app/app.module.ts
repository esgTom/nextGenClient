import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationComponent } from './generation/generation.component';
import { NextGenDataService } from './services/next-gen-data.service';

@NgModule({
  declarations: [
    AppComponent,
    GenerationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NextGenDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
