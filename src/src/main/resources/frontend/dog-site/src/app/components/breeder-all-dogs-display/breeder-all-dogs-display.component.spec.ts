import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederAllDogsDisplayComponent } from './breeder-all-dogs-display.component';

describe('BreederAllDogsDisplayComponent', () => {
  let component: BreederAllDogsDisplayComponent;
  let fixture: ComponentFixture<BreederAllDogsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreederAllDogsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreederAllDogsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
