import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Vulcan Power Brake',
      damage: 2,
      spread: {
        aim: null,
        hip: null,
        move: null
      },
      recoil: 0.13,
      range: [null, null]
    })
  }
}
