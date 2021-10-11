import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'ArmCom BAR-01', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: -0.38,
        hip: -0.33,
        move: -0.33
      },
      recoil: -0.19,
      scopeIn: 0.02,
      range: [7, 10],
      run: -0.13
    })
  }
}
