import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Frontier Power Muzzle',
      damage: +1,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.07
      },
      recoil: 0.04,
      range: [-1, -1]
    })
  }
}
