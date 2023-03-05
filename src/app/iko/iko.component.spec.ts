import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkoComponent } from './iko.component';

describe('IkoComponent', () => {
  let component: IkoComponent;
  let fixture: ComponentFixture<IkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
