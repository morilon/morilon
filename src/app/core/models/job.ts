export class Job {
    order: number
    company: string
    description: string
    date: string
    companyUrl: string

    static create(order: number, company: string, companyUrl: string) {
        const job = new Job()
        job.order = order
        job.company = company
        job.companyUrl = `http://${companyUrl}`
        return job
    }
}