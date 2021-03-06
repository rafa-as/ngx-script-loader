import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScriptService } from 'ngx-script-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('menuContainer', { static: true }) menuContainer: ElementRef;

  constructor(private scriptService: ScriptService) {
  }

  showWidget = false;
  spWidgetAttributes = {
    'data-location': 'spiros-restaurant--lounge',
    'data-api_key': 'ke09z8icq4xu8uiiccighy1bw',
    'id': 'singleplatform-menu'
  };

  serviceExample() {
    this.scriptService.loadScript('https://menus.singleplatform.com/widget', this.spWidgetAttributes, this.menuContainer.nativeElement)
      .subscribe(this.widgetLoaded, this.widgetLoadFailed);
  }

  runScript() {
    this.scriptService.runScript('https://menus.singleplatform.com/widget', this.spWidgetAttributes, this.menuContainer.nativeElement)
      .subscribe(this.widgetLoaded, this.widgetLoadFailed);
  }

  widgetLoaded(event: Event) {
    console.log('Loaded', event);
  }

  widgetLoadFailed(event: Event) {
    console.log('Failed', event);
  }
}
