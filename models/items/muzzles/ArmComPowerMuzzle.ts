import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'ArmCom Power Muzzle',
      damage: 2,
      aim: 0.06,
      hip: 0.12,
      move: 0.14,
      recoil: 0.04,
      range: [-2, -2]
    })
  }
}
