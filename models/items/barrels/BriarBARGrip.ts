import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar BAR Grip', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: 0,
        hip: 0,
        move: 0.09
      },
      recoil: -0.2,
      scopeIn: 0.02,
      range: [0, 0],
      run: -0.18
    })
  }
}
