import { Component, OnInit } from '@angular/core'

import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education
  private keys = {
    title: 'Education.Title',
    tads: 'Education.TADS',
    tech: 'Education.Tech'
  }
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.education = new Education()
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    console.log(this.keys)
    this.langService.translate.get([this.keys.title, this.keys.tads, this.keys.tech])
      .subscribe(val => {
        this.education = {
          title: val[this.keys.title],
          courses: [
            Course.create('Faculdade Prof. Luiz Rosa (Anhanguera)', val[this.keys.tads], '2012 - 2014'),
            Course.create('Escola Técnica Vasco Antônio Venchiarutti', val[this.keys.tech], '2007 - 2008')
          ]
        } as Education
      })
  }
}

export class Education {
  title: string
  courses: Course[]

  constructor() {
    this.courses = []
  }
}

export class Course {
  schoolName: string
  description: string
  duration: string

  static create(school: string, desc: string, duration: string): Course {
    const c = new Course()
    c.schoolName = school
    c.description = desc
    c.duration = duration
    return c
  }
}
