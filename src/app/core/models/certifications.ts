import { Exam } from '@models/exam'

export class Certification {
  title: string
  certsTitle: string
  examsTitle: string
  exams: Exam[]
  courses: string[]

  constructor() {
    this.exams = []
    this.courses = []
  }
}
