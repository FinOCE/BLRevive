import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Silverwood Light Accuracy Barrel',
      damage: -3,
      spread: {
        aim: -0.15,
        hip: -0.28,
        move: -0.56
      },
      recoil: 0,
      scopeIn: -0.01,
      range: [5, 5],
      run: 0.04
    })
  }
}
