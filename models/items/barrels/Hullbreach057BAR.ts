import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Hullbreach 057BAR', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: 0.39,
        hip: 0.26,
        move: 0.28
      },
      recoil: -0.2,
      scopeIn: -0.01,
      range: [-6, -8],
      run: 0.05
    })
  }
}
