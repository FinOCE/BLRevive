import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Silverwood Flash Breaker',
      damage: 1,
      aim: null,
      hip: null,
      move: null,
      recoil: 0.08,
      range: [null, null]
    })
  }
}
