import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Vulcan Notched Flash Breaker',
      damage: -2,
      recoil: -0.15,
      missingData: true
    })
  }
}
