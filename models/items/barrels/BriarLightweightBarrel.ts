import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Lightweight Barrel',
      damage: 0,
      spread: {
        aim: 0.12,
        hip: -0.23,
        move: -0.2
      },
      recoil: 0,
      scopeIn: -0.03,
      range: [-4, -4],
      run: 0.08
    })
  }
}
