import { Component, OnInit } from '@angular/core'

import { LanguageService } from '@services/language.service'

import { Experience } from '@models/experience'
import { Job } from '@models/job'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience
  private keys = {
    sectionTitle: 'Experience.SectionTitle',
    title: 'Experience.Jobs.Title',
    descriptionOrder: 'Experience.Jobs.Description.',
    dateOrder: 'Experience.Jobs.Date.',
    translationKeys: [
      'Experience.SectionTitle',
      'Experience.Jobs.Title',
      'Experience.Jobs.Description.0',
      'Experience.Jobs.Description.1',
      'Experience.Jobs.Description.2',
      'Experience.Jobs.Description.3',
      'Experience.Jobs.Description.4',
      'Experience.Jobs.Date.0',
      'Experience.Jobs.Date.1',
      'Experience.Jobs.Date.2',
      'Experience.Jobs.Date.3',
      'Experience.Jobs.Date.4'
    ]
  }
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.experience = {
      jobs: [
        Job.create(0, 'Actminds, Inc', 'actminds.com'),
        Job.create(1, `Programmer's Informática`, 'programmers.com.br'),
        Job.create(2, 'Grupo Viceri', 'viceri.com.br'),
        Job.create(3, 'Goldsoft', 'goldsoft.com.br'),
        Job.create(4, 'Finamax CFI', 'finamax.com.br')
      ]
    } as Experience
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get(this.keys.translationKeys)
      .subscribe(val => {
        this.experience.sectionTitle = val[this.keys.sectionTitle]
        this.experience.jobTitle = val[this.keys.title]
        this.experience.jobs.forEach((job, i) => {
          this.experience.jobs[i].description = val[`${this.keys.descriptionOrder}${i}`]
          this.experience.jobs[i].date = val[`${this.keys.dateOrder}${i}`]
        })
      })
  }
}
