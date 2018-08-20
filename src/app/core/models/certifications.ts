import { Exam } from '@models/exam'

export class Certification {
  title: string
  certsTitle: string
  examsTitle: string
  awardsTitle: string
  exams: Exam[]
  courses: string[]
  awards: string[]

  constructor() {
    this.exams = []
    this.courses = []
    this.awards = []
  }
}
