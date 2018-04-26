import { Job } from '@models/job'

export class Experience {
    title: string
    jobTitle: string
    jobs: Job[]

    constructor() {
        this.jobs = []
    }
}
