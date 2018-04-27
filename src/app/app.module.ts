import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { FileTranslateLoader } from './shared/loaders/file-translate-loader'

import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { SectionsModule } from './sections/sections.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: FileTranslateLoader
      }
    }),
    AppRoutingModule,
    SectionsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
