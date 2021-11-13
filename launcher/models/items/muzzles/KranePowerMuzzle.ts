import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Krane Power Muzzle',
      damage: 2,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.07
      },
      recoil: 0.08,
      range: [-1, -1]
    })
  }
}
