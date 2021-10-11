import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Silverwood CQC Barrel',
      damage: 0,
      spread: {
        aim: 0.06,
        hip: 0.12,
        move: -0.1
      },
      recoil: 0,
      scopeIn: -0.01,
      range: [-2, -2],
      run: 0.04
    })
  }
}
