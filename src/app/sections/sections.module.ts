import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    CertificationsComponent
  ],
  exports: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    CertificationsComponent
  ]
})
export class SectionsModule { }
