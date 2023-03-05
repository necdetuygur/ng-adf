import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwDovizComponent } from './fw-doviz.component';

describe('FwDovizComponent', () => {
  let component: FwDovizComponent;
  let fixture: ComponentFixture<FwDovizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwDovizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwDovizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
