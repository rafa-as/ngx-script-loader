import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScriptLoaderComponent } from './ngx-script-loader.component';

describe('NgxScriptLoaderComponent', () => {
  let component: NgxScriptLoaderComponent;
  let fixture: ComponentFixture<NgxScriptLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScriptLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScriptLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
