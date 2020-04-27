import { Component, ElementRef, ViewChild } from '@angular/core';

import { ScriptLoaderService } from 'ngx-script-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('menuContainer', {static: true}) menuContainer: ElementRef;

  showWidget = false;
  spWidgetAttributes = {
    'data-location': 'spiros-restaurant--lounge',
    'data-api_key': 'ke09z8icq4xu8uiiccighy1bw',
    'id': 'singleplatform-menu'
  };

  constructor(private scriptLoaderService: ScriptLoaderService) {
  }

  serviceExample() {
    this.scriptLoaderService.loadScript('https://menus.singleplatform.com/widget', this.spWidgetAttributes, this.menuContainer.nativeElement)
      .subscribe(this.widgetLoaded, this.widgetLoadFailed);
  }

  runScript() {
    this.scriptLoaderService.runScript('https://menus.singleplatform.com/widget', this.spWidgetAttributes, this.menuContainer.nativeElement)
      .subscribe(this.widgetLoaded, this.widgetLoadFailed);
  }

  widgetLoaded(event: Event) {
    console.log('Loaded', event);
  }

  widgetLoadFailed(event: Event) {
    console.log('Failed', event);
  }
}
