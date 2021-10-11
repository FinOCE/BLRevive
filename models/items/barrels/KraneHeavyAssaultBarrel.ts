import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Krane Heavy Assault Barrel',
      damage: 4,
      spread: {
        aim: 0.09,
        hip: 0.16,
        move: 1.15
      },
      recoil: 0,
      scopeIn: 0.04,
      range: [-3, -3],
      run: -0.08
    })
  }
}
