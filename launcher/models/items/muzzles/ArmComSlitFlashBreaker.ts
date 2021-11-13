import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'ArmCom Slit Flash Breaker',
      recoil: -0.04,
      missingData: true
    })
  }
}
