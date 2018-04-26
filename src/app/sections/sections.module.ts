import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    InterestsComponent
  ],
  exports: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    InterestsComponent
  ]
})
export class SectionsModule { }
