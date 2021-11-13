import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'ArmCom Power Muzzle',
      damage: 2,
      spread: {
        aim: 0.06,
        hip: 0.12,
        move: 0.14
      },
      recoil: 0.04,
      range: [-2, -2]
    })
  }
}
