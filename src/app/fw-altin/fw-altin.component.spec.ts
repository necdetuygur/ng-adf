import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwAltinComponent } from './fw-altin.component';

describe('FwAltinComponent', () => {
  let component: FwAltinComponent;
  let fixture: ComponentFixture<FwAltinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwAltinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwAltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
