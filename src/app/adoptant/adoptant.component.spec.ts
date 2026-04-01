import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptantComponent } from './adoptant.component';

describe('AdoptantComponent', () => {
  let component: AdoptantComponent;
  let fixture: ComponentFixture<AdoptantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
