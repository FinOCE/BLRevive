import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Extended Muzzle',
      damage: -1,
      aim: -0.03,
      hip: -0.06,
      move: -0.06,
      recoil: -0.08,
      range: [1, 1]
    })
  }
}
