import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      name: 'ArmCom Infrared Scope',
      infrared: true,
      zoom: 0.7,
      scopeIn: 0.14
    })
  }
}
