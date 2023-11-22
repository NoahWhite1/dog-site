import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuppyDisplayComponent } from './create-puppy-display.component';

describe('CreatePuppyDisplayComponent', () => {
  let component: CreatePuppyDisplayComponent;
  let fixture: ComponentFixture<CreatePuppyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePuppyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePuppyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
