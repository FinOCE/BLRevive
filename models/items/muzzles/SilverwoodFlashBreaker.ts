import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Silverwood Flash Breaker',
      damage: 1,
      recoil: 0.08,
      missingData: true
    })
  }
}
