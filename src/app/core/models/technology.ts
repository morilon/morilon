import { Proficiency } from '@enums/proficiency.enum'
import { ProficiencyColorBuilder } from '../builders/proficiency-color-builder'

export class Technology {
    name: string
    level: Proficiency
    color: string

    static create(name: string, level: Proficiency) {
        const tech = new Technology()
        tech.name = name
        tech.level = level
        tech.color = ProficiencyColorBuilder.get(level)
        return tech
    }
}