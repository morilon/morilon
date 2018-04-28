import { Injectable } from '@angular/core'

import { EnvironmentService } from '@services/environment.service'
import { TranslateService } from '@ngx-translate/core'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class LanguageService {
  translate: TranslateService
  onReload: Subject<any>

  private availableLangs = {
    ['pt']: 'pt-BR',
    ['pt-BR']: 'pt-BR',
    ['en']: 'en-US',
    ['en-US']: 'en-US'
  }

  constructor(
    private envService: EnvironmentService,
    translateService: TranslateService
  ) {
    this.translate = translateService
  }

  load() {
    this.onReload = new Subject()
    const current = this.getDefaultLang()
    this.translate.setDefaultLang(current)
    this.translate.use(current)
  }

  reload(lang: string): void {
    this.translate.use(lang)
    this.onReload.next()
  }

  private getDefaultLang(): string {
    const envLang = this.envService.properties.defaultLang

    if (envLang) { return this.availableLangs[envLang] }

    const browserLang = this.translate.getBrowserLang()

    if (browserLang) { return this.availableLangs[envLang] } else { return 'en-US' }
  }

}
