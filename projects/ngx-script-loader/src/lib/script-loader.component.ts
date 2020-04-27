import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ScriptLoaderService } from './script-loader.service';

@Component({
  selector: 'ngx-script-loader',
  template: ''
})
export class ScriptLoaderComponent implements OnInit {

  @Input()
  src: string;

  @Input()
  attributes: { [key: string]: string } = {};

  @Output() load = new EventEmitter<Event>();

  @Output() error = new EventEmitter<Event>();

  constructor(private scriptLoaderService: ScriptLoaderService, private element: ElementRef) {
  }

  ngOnInit() {
    this.scriptLoaderService.loadScript(this.src, this.attributes, this.element.nativeElement)
      .subscribe((event) => {
        this.load.emit(event);
      }, (error) => {
        this.error.emit(error);
      });
  }
}
