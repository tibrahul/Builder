import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationFlowsComponent } from './generation-flows.component';

describe('GenerationFlowsComponent', () => {
  let component: GenerationFlowsComponent;
  let fixture: ComponentFixture<GenerationFlowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationFlowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
