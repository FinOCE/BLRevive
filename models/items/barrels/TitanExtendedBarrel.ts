import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Titan Extended Barrel',
      damage: 0,
      spread: {
        aim: -0.06,
        hip: -0.11,
        move: 0.33
      },
      recoil: 0,
      scopeIn: -0.02,
      range: [2, 2],
      run: -0.04
    })
  }
}
