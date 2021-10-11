import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar CQC Barrel',
      damage: 4,
      spread: {
        aim: 0.18,
        hip: 0.33,
        move: 0.64
      },
      recoil: 0,
      scopeIn: 0.01,
      range: [-6, -6],
      run: -0.02
    })
  }
}
