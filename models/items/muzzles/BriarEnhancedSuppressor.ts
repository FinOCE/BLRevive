import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Enhanced Suppressor',
      damage: -1,
      aim: null,
      hip: null,
      move: null,
      recoil: -0.12,
      range: [null, null]
    })
  }
}
