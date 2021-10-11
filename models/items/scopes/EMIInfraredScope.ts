import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      name: 'EMI Infrared Scope',
      infrared: true,
      zoom: 1.7,
      scopeIn: 0.19
    })
  }
}
