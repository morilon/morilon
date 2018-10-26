export class Award {
  uri: string
  description: string

  static create(uri: string, desc: string): Award {
    return Object.assign(new Award(), {
      uri: uri,
      description: desc
    })
  }
}
