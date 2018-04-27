import { TranslateLoader } from '@ngx-translate/core'
import { Observable } from 'rxjs'

import * as enUS from '@i18n/en-US.json'
import * as ptBR from '@i18n/pt-BR.json'

export class FileTranslateLoader implements TranslateLoader {
  private langs = {
    ['pt-BR']: ptBR,
    ['en-US']: enUS
  }

  getTranslation(lang: string): Observable<any> {
    return Observable.create(o => {
      o.next(this.langs[lang])
      o.complete()
    })
  }
}
