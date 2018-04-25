import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test: string;

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.langService.load();

    this.translate();
    this.langService.onReload.subscribe(this.translate.bind(this));
  }

  translate(): void {
    this.langService.translate.get('Navbar.Test').subscribe(res => {
      this.test = res;
    });
  }
}
