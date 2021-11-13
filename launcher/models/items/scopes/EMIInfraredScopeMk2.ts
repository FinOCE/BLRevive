import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      name: 'EMI Infrared Scope Mk. 2',
      infrared: true,
      zoom: 2.7,
      scopeIn: 0.34
    })
  }
}
