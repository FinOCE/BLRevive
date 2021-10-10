import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Vulcan Notched Flash Breaker',
      damage: -2,
      aim: null,
      hip: null,
      move: null,
      recoil: -0.15,
      range: [null, null]
    })
  }
}
