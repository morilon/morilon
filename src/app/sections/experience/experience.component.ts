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
    title: 'Experience.Title',
    jobTitle: 'Experience.Jobs.Title',
    descriptions: 'Experience.Jobs.Descriptions',
    dates: 'Experience.Jobs.Dates'
  }
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.experience = {
      jobs: [
        Job.create('Actminds, Inc', 'actminds.com'),
        Job.create('Grupo Viceri', 'viceri.com.br'),
        Job.create('Goldsoft', 'goldsoft.com.br'),
        Job.create('Finamax CFI', 'finamax.com.br')
      ]
    } as Experience
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.jobTitle, this.keys.descriptions, this.keys.dates])
      .subscribe(val => {
        this.experience.title = val[this.keys.title]
        this.experience.jobTitle = val[this.keys.jobTitle]
        const descs = val[`${this.keys.descriptions}`]
        const dates = val[`${this.keys.dates}`]
        this.experience.jobs.forEach((job, i) => {
          this.experience.jobs[i].description = descs[i]
          this.experience.jobs[i].date = dates[i]
        })
      })
  }
}
