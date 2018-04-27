import { Component, OnInit } from '@angular/core'
import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.langService.load()
  }
}
