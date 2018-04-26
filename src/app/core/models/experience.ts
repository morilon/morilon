import { Job } from '@models/job'

export class Experience {
    sectionTitle: string
    jobTitle: string
    jobs: Job[]

    constructor() {
        this.jobs = []
    }
}
