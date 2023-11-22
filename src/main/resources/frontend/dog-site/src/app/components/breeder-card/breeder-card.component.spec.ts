import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederCardComponent } from './breeder-card.component';

describe('BreederCardComponent', () => {
  let component: BreederCardComponent;
  let fixture: ComponentFixture<BreederCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreederCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreederCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
