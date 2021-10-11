import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Briar Enhanced Suppressor',
      damage: -1,
      recoil: -0.12,
      missingData: true
    })
  }
}
