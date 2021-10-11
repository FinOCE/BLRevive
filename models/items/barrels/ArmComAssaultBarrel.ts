import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'ArmCom Assault Barrel',
      damage: 3,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 1.01
      },
      recoil: 0,
      scopeIn: 0.04,
      range: [-1, -1],
      run: -0.08
    })
  }
}
