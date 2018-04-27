import { Component, OnInit } from '@angular/core'

import { Navbar } from '@models/navbar'

import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: Navbar
  flags = {
    br: '/assets/images/flag-br.png',
    us: '/assets/images/flag-us.png'
  }

  constructor(
    private langService: LanguageService
  ) { }

  ngOnInit() {
    this.navbar = Navbar.create(
      '/assets/images/profile-batman.jpg',
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

  private translate(): void {
    this.langService
      .translate.get(this.navbar.getKeys())
      .subscribe(val => this.navbar.items.forEach(t => t.text = val[t.key]))
  }
}
