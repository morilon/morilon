export class Environment {
  production: boolean
  defaultLang: string

  static fromLocal(local: any): Environment {
    const env = new Environment()
    env.production = local.production
    env.defaultLang = local.defaultLang
    return env
  }
}
