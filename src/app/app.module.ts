import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureSectionSkillsComponent } from './feature-section-skills/feature-section-skills.component';
import { FeatureSectionAboutMeComponent } from './feature-section-about-me/feature-section-about-me.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavSectionNavbarComponent } from './nav-section-navbar/nav-section-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSectionSkillsComponent,
    FeatureSectionAboutMeComponent,
    HeroSectionComponent,
    NavSectionNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
