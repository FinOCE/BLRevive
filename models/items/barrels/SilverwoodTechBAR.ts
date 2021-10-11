import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Silverwood TechBAR', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: -0.45,
        hip: -0.4,
        move: -0.24
      },
      recoil: 0,
      scopeIn: 0.05,
      range: [9, 12],
      run: -0.36
    })
  }
}
