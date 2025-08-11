import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatonsDispoComponent } from './chatons-dispo.component';

describe('ChatonsDispoComponent', () => {
  let component: ChatonsDispoComponent;
  let fixture: ComponentFixture<ChatonsDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatonsDispoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatonsDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
