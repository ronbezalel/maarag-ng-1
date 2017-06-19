import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetMostWatchedByIdComponent } from './get-most-watched-by-id/get-most-watched-by-id.component';
import { GetMostWatchedByLimitComponent } from './get-most-watched-by-limit/get-most-watched-by-limit.component';
import { GetMostWatchedByLanguageComponent } from './get-most-watched-by-language/get-most-watched-by-language.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetMostWatchedByIdComponent,
    GetMostWatchedByLimitComponent,
    GetMostWatchedByLanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
