import { Component, OnInit } from '@angular/core'
import { Certification } from '@models/certifications'
import { LanguageService } from '@services/language.service'
import { Exam } from '@models/exam'

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certification: Certification
  private keys = {
    title: 'Certifications.Title',
    certsTitle: 'Certifications.CertsTitle',
    examsTitle: 'Certifications.ExamsTitle'
  }

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.certification = {
      exams: [
        Exam.create('http://www.mycertprofile.com/Profile/8786735631/86/2690', 'icon-ms.png', 'MCSA - Microsoft® Certified Solutions Associate: Web Applications', 'G344-8436'),
        Exam.create('http://www.mycertprofile.com/Profile/8786735631/12/1519', 'icon-ms.png', 'MCP - Microsoft® Certified Professional', 'F599-4871')
      ],
      courses: [
        'ASP.NET Core + Angular 2',
        'ASP.NET MVC 5 - Enterprise Applications',
        'Modern Apps and Architectures. (MVC5, DDD, EF6, IoC, Domain Events)',
        'edX Azure Skills Toolkit'
      ]
    } as Certification
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.certsTitle, this.keys.examsTitle])
      .subscribe(val => {
        this.certification.title = val[this.keys.title]
        this.certification.certsTitle = val[this.keys.certsTitle]
        this.certification.examsTitle = val[this.keys.examsTitle]
      })
  }
}
