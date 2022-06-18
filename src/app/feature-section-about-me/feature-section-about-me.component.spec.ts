import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionAboutMeComponent } from './feature-section-about-me.component';

describe('FeatureSectionAboutMeComponent', () => {
  let component: FeatureSectionAboutMeComponent;
  let fixture: ComponentFixture<FeatureSectionAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSectionAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
