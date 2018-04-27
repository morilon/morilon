import { Proficiency } from '@enums/proficiency.enum'

export class ProficiencyColorBuilder {
    private static colors = {
        [Proficiency.Beginner]: '#ff3838',
        [Proficiency.Proficient]: '#ffa400',
        [Proficiency.Advanced]: '#0984e3',
        [Proficiency.Master]: '#05c46b',
        [Proficiency.Expert]: '#192a56'
    }

    static get(level: Proficiency): string {
        return this.colors[level]
    }
}
