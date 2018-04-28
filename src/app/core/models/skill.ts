import { Technology } from '@models/technology'

export class Skill {
  title: string
  subtitle: string
  help: string
  levels: string[]
  techs: Technology[]

  constructor() {
    this.techs = []
    this.levels = []
  }
}
