import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSectionNavbarComponent } from './nav-section-navbar.component';

describe('NavSectionNavbarComponent', () => {
  let component: NavSectionNavbarComponent;
  let fixture: ComponentFixture<NavSectionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSectionNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSectionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
