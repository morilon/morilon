import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Title } from '@angular/platform-browser';
import { EnvironmentService } from '@services/environment.service';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@services/language.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    Title,
    HttpClient,
    EnvironmentService,
    LanguageService
  ]
})
export class CoreModule { }
