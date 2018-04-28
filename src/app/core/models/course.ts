export class Course {
  schoolName: string
  description: string
  duration: string

  static create(school: string, desc: string, duration: string): Course {
    const c = new Course()
    c.schoolName = school
    c.description = desc
    c.duration = duration
    return c
  }
}
