import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwRowComponent } from './fw-row.component';

describe('FwRowComponent', () => {
  let component: FwRowComponent;
  let fixture: ComponentFixture<FwRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
