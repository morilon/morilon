import { Component, OnInit } from '@angular/core'
import { LanguageService } from '@services/language.service'
import { Interests } from '@models/interests'

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: Interests
  private keys = {
    title: 'Interests.Title',
    lines: 'Interests.Lines'
  }

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.interests = new Interests()
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.lines])
      .subscribe(val => {
        this.interests = {
          title: val[this.keys.title],
          lines: val[this.keys.lines]
        } as Interests
      })
  }

}
