export class Environment {
  baseHref: string
  production: boolean
  defaultLang: string

  static fromLocal(local: any): Environment {
    const env = new Environment()
    env.baseHref = local.baseHref
    env.production = local.production
    env.defaultLang = local.defaultLang
    return env
  }
}
