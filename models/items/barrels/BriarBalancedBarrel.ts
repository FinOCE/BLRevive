import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Balanced Barrel',
      damage: 2,
      spread: {
        aim: 0,
        hip: 0,
        move: 0.94
      },
      recoil: 0,
      scopeIn: 0.04,
      range: [0, 0],
      run: -0.08
    })
  }
}
