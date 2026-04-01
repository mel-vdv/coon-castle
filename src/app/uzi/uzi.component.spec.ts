import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UziComponent } from './uzi.component';

describe('UziComponent', () => {
  let component: UziComponent;
  let fixture: ComponentFixture<UziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
