import { Component, OnInit, AfterViewInit } from '@angular/core'
import { LanguageService } from '@services/language.service'
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.langService.load()
  }

  ngAfterViewInit() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, 'easeInOutExpo')
          return false
        }
      }
    })
  }
}
