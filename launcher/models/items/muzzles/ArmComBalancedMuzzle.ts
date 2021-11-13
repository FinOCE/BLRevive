import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'ArmCom Balanced Muzzle',
      damage: 1,
      spread: {
        aim: -0.03,
        hip: -0.06,
        move: -0.06
      },
      recoil: 0.13,
      range: [1, 1]
    })
  }
}
