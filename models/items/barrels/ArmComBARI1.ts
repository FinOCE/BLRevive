import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'ArmCom BARI1', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: -0.38,
        hip: -0.33,
        move: -0.2
      },
      recoil: 0,
      scopeIn: 0.04,
      range: [7, 10],
      run: -0.3
    })
  }
}
