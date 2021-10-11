import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Briar Dampening Muzzle',
      recoil: -0.04,
      missingData: true
    })
  }
}
