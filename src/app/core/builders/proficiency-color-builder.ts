import { Proficiency } from '@enums/proficiency.enum'

export class ProficiencyColorBuilder {
  private static colors = {
    [Proficiency.Beginner]: '#eb4d4b',
    [Proficiency.Proficient]: '#ffb142',
    [Proficiency.Advanced]: '#3C8AAD',
    [Proficiency.Master]: '#05c46b',
    [Proficiency.Expert]: '#574b90'
  }

  static get(level: Proficiency): string {
    return this.colors[level]
  }
}
