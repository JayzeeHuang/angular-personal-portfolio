import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionSkillsComponent } from './feature-section-skills.component';

describe('FeatureSectionSkillsComponent', () => {
  let component: FeatureSectionSkillsComponent;
  let fixture: ComponentFixture<FeatureSectionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSectionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
