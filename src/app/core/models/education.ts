import { Course } from '@models/course'

export class Education {
  title: string
  courses: Course[]

  constructor() {
    this.courses = []
  }
}
