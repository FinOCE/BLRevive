import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Hullbreach 047BAR', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: 0.19,
        hip: 0.13,
        move: 0.19
      },
      recoil: -0.2,
      scopeIn: 0.01,
      range: [-3, -4],
      run: -0.06
    })
  }
}
