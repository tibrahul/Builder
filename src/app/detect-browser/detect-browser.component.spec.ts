import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectBrowserComponent } from './detect-browser.component';

describe('DetectBrowserComponent', () => {
  let component: DetectBrowserComponent;
  let fixture: ComponentFixture<DetectBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
