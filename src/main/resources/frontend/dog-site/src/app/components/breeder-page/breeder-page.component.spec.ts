import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederPageComponent } from './breeder-page.component';

describe('BreederPageComponent', () => {
  let component: BreederPageComponent;
  let fixture: ComponentFixture<BreederPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreederPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreederPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
