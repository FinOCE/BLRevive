import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Vulcan Power Brake',
      damage: 2,
      recoil: 0.13,
      missingData: true
    })
  }
}
