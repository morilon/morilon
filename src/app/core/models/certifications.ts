import { Exam } from './exam'
import { Award } from './award'

export class Certification {
  title: string
  certsTitle: string
  examsTitle: string
  awardsTitle: string
  exams: Exam[]
  courses: string[]
  awards: Award[]

  constructor() {
    this.exams = []
    this.courses = []
    this.awards = []
  }
}
