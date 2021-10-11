import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar Assault Barrel',
      damage: 2,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.77
      },
      recoil: 0,
      scopeIn: 0.03,
      range: [-1, -1],
      run: -0.06
    })
  }
}
