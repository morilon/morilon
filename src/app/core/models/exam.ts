export class Exam {
  uri: string
  logo: string
  description: string
  license: string

  static create(uri: string, logo: string, desc: string, license: string): Exam {
    const exam = new Exam()
    exam.uri = uri
    exam.logo = logo
    exam.description = desc
    exam.license = license
    return exam
  }
}
