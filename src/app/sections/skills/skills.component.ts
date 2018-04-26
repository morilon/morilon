import { Component, OnInit } from '@angular/core'
import { trigger, state, animate, transition, style } from '@angular/animations'

import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('level', [
      state('beginner', style({
        width: '15%'
      })),
      state('proficient', style({
        width: '25%'
      })),
      state('advanced', style({
        width: '75%'
      })),
      state('expert', style({
        width: '75%'
      })),
      state('master', style({
        width: '100%'
      })),
      transition('* <=> *', animate('1500ms ease-in'))
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills: Skills
  private keys = {
    title: 'Skills.Title',
    languages: 'Skills.Languages',
    tools: 'Skills.Tools'
  }

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.skills = new Skills()
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.languages, this.keys.tools])
      .subscribe(val => {
        this.skills = {
          title: val[this.keys.title],
          languages: val[this.keys.languages],
          tools: val[this.keys.tools]
        } as Skills
      })
  }
}

export class Skills {
  title: string
  languages: string
  tools: string
}
