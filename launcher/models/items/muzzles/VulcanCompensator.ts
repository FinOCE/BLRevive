import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Vulcan Compensator',
      damage: -1,
      recoil: -0.07,
      missingData: true
    })
  }
}
