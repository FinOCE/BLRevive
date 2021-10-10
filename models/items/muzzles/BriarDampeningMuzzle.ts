import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Dampening Muzzle',
      damage: null,
      aim: null,
      hip: null,
      move: null,
      recoil: -0.04,
      range: [null, null]
    })
  }
}