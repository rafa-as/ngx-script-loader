import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptLoaderComponent } from './script-loader.component';

@NgModule({
  declarations: [
    ScriptLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScriptLoaderComponent
  ]
})
export class ScriptLoaderModule {
}
