import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedWebsitesComponent } from './trusted-websites.component';

describe('TrustedWebsitesComponent', () => {
  let component: TrustedWebsitesComponent;
  let fixture: ComponentFixture<TrustedWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
