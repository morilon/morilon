import { SocialMedia } from '@models/social-media'

export class About {
  firstName: string
  middleName: string
  lastName: string
  email: string
  contact: string
  description: string
  socialMedia: SocialMedia[]
  cvUrl: string

  constructor() {
    this.socialMedia = []
  }
}
