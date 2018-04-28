import { Component, OnInit } from '@angular/core'

import { Navbar } from '@models/navbar'

import { LanguageService } from '@services/language.service'
import { EnvironmentService } from '@services/environment.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: Navbar
  flags = {
    br: this.envService.images('flag-br.png'),
    us: this.envService.images('flag-us.png')
  }

  constructor(
    private envService: EnvironmentService,
    private langService: LanguageService
  ) { }

  ngOnInit() {
    this.navbar = Navbar.create(
      this.envService.images(this.getProfilePicture()),
      'Murilo Almeida',
      [
        { key: 'Navbar.About', uri: '#about' },
        { key: 'Navbar.Experience', uri: '#experience' },
        { key: 'Navbar.Education', uri: '#education' },
        { key: 'Navbar.Skills', uri: '#skills' },
        { key: 'Navbar.Certifications', uri: '#certifications' },
        { key: 'Navbar.Interests', uri: '#interests' }
      ]
    )

    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  reloadWith(lang: string): void {
    this.langService.reload(lang)
  }

  private getProfilePicture(): string {
    const prefix = 'profile-'
    if (!this.envService.properties.production) return `${prefix}batman.jpg`

    const time = new Date().getHours()

    if (time > 8 && time <= 18) {
      return `${prefix}why-so-serious.jpg`
    } else {
      return `${prefix}not-impressed.jpg`
    }
  }

  private translate(): void {
    this.langService
      .translate.get(this.navbar.getKeys())
      .subscribe(val => this.navbar.items.forEach(t => t.text = val[t.key]))
  }
}
