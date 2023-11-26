import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederInformationPageComponent } from './breeder-information-page.component';

describe('BreederInformationPageComponent', () => {
  let component: BreederInformationPageComponent;
  let fixture: ComponentFixture<BreederInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreederInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreederInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
