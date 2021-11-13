import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Briar BrSGP1', // FOR SHOTGUN
      damage: 10,
      recoil: -2.58,
      missingData: true
    })
  }
}
