import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'
import { Environment } from '@models/environment'

@Injectable()
export class EnvironmentService {
  properties: Environment

  constructor() {
    this.properties = Environment.fromLocal(environment)
  }

  images(file: string, dir: string = 'assets/images/'): string {
    return `${this.properties.baseHref}${dir}${file}`
  }
}
