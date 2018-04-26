export class Job {
    company: string
    description: string
    date: string
    companyUrl: string

    static create(company: string, companyUrl: string) {
        const job = new Job()
        job.company = company
        job.companyUrl = `http://${companyUrl}`
        return job
    }
}