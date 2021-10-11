import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Leatherneck Accuracy Barrel',
      damage: -1,
      spread: {
        aim: -0.18,
        hip: -0.34,
        move: 0.51
      },
      recoil: 0,
      scopeIn: 0.04,
      range: [6, 6],
      run: -0.08
    })
  }
}
