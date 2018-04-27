import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Environment } from '@models/environment'

@Injectable()
export class EnvironmentService {
  properties: Environment

  constructor() {
    this.properties = Environment.fromLocal(environment)
  }

}
