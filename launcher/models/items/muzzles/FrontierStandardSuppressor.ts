import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      name: 'Frontier Standard Suppressor',
      damage: -1,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.07
      },
      recoil: -0.12,
      range: [-1, -1]
    })
  }
}
