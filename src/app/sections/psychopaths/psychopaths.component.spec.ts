import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychopathsComponent } from './psychopaths.component';

describe('PsychopathsComponent', () => {
  let component: PsychopathsComponent;
  let fixture: ComponentFixture<PsychopathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychopathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychopathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
