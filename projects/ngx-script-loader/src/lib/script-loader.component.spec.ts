import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptLoaderComponent } from './script-loader.component';
import { ScriptLoaderService } from './script-loader.service';

describe('NgxScriptLoaderComponent', () => {
  let component: ScriptLoaderComponent;
  let fixture: ComponentFixture<ScriptLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptLoaderComponent],
      providers: [ScriptLoaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
