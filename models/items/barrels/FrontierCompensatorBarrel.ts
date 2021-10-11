import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Frontier Compensator Barrel',
      damage: -1,
      spread: {
        aim: -0.18,
        hip: -0.34,
        move: 0.06
      },
      recoil: 0,
      scopeIn: 0.02,
      range: [0, 0],
      run: -0.04
    })
  }
}
