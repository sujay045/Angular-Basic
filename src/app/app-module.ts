import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Test } from './test/test';

import { FormsModule } from '@angular/forms';
import { Emp } from './emp/emp';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Test,
    Emp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
