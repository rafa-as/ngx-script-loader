import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScriptLoaderModule } from 'ngx-script-loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScriptLoaderModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
