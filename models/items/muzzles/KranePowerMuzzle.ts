import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Krane Power Muzzle',
      damage: 2,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.07
      },
      recoil: 0.08,
      range: [-1, -1]
    })
  }
}
