import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Briar Extended Muzzle',
      damage: -1,
      spread: {
        aim: -0.03,
        hip: -0.06,
        move: -0.06
      },
      recoil: -0.08,
      range: [1, 1]
    })
  }
}
