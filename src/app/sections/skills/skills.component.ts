import { Component, OnInit } from '@angular/core'
import { trigger, state, animate, transition, style } from '@angular/animations'

import { LanguageService } from '@services/language.service'

import { ProficiencyColorBuilder } from '../../core/builders/proficiency-color-builder'
import { Technology } from '@models/technology'
import { Proficiency } from '@enums/proficiency.enum'
import { Skill } from '@models/skill'

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
  skill: Skill
  private keys = {
    title: 'Skills.Title',
    subtitle: 'Skills.Subtitle',
    help: 'Skills.Legend',
    levels: 'Skills.Levels'
  }

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.skill = new Skill()
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.subtitle, this.keys.help, this.keys.levels])
      .subscribe(val => {
        this.skill = {
          title: val[this.keys.title],
          subtitle: val[this.keys.subtitle],
          help: val[this.keys.help],
          levels: val[this.keys.levels],
          techs: [
            Technology.create('.NET /.NET Core / CSharp (C#)', Proficiency.Master),
            Technology.create('Azure Cloud', Proficiency.Advanced),
            Technology.create('HTML5/CSS3', Proficiency.Master),
            Technology.create('GIT/TFS', Proficiency.Advanced),
            Technology.create('Angular/Angularjs', Proficiency.Proficient),
            Technology.create('Javascript', Proficiency.Proficient),
            Technology.create('Typescript', Proficiency.Advanced),
            Technology.create('MSSQL / MySQL / PostgreeSQL / Oracle', Proficiency.Advanced),
            Technology.create('NoSQL (MongoDB, Azure)', Proficiency.Advanced),
            Technology.create('ORM/Micro ORM (Entity Framework & Core / Dapper)', Proficiency.Master),
            Technology.create('Docker', Proficiency.Beginner),
            Technology.create('Xamarin', Proficiency.Proficient),
            Technology.create('CI/CD (Jenkins, VSTS)', Proficiency.Proficient),
            Technology.create('REST / SOAP', Proficiency.Master),
            Technology.create('Agile / Scrum', Proficiency.Master),
            Technology.create('SOLID / KISS', Proficiency.Master),
            Technology.create('TDD / BDD', Proficiency.Advanced),
            Technology.create('Java', Proficiency.Proficient),
            Technology.create('Ruby', Proficiency.Beginner),
            Technology.create('NodeJS', Proficiency.Beginner)
          ]
        } as Skill
      })
  }

  getColor(level: number) {
    return ProficiencyColorBuilder.get(level)
  }
}
