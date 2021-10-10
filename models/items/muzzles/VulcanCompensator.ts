import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Vulcan Compensator',
      damage: -1,
      aim: null,
      hip: null,
      move: null,
      recoil: -0.07,
      range: [null, null]
    })
  }
}
