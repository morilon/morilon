import { Component, OnInit } from '@angular/core'
import { LanguageService } from '@services/language.service'
import { About } from '@models/about'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About
  private keys = {
    country: 'About.Country',
    desc: 'About.Description'
  }

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.about = new About()
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.country, this.keys.desc])
      .subscribe(val => {
        this.about = {
          firstName: 'Murilo',
          middleName: 'Dias de',
          lastName: 'Almeida',
          email: 'murilo.ad@outlook.com',
          contact: `Jundiaí, São Paulo - ${val[this.keys.country]} - +55 (11) 96647-9339 -`,
          description: val[this.keys.desc],
          socialMedia: [
            { uri: 'https://www.linkedin.com/in/murilodealmeida', faIcon: 'fa-linkedin' },
            { uri: 'https://github.com/morilon', faIcon: 'fa-github' }
          ]
        } as About
      })
  }
}
