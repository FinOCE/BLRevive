import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Frontier Compensator Barrel',
      damage: -1,
      spread: {
        aim: -0.18,
        hip: -0.34,
        move: 0.06
      },
      scopeIn: 0.02,
      run: -0.04
    })
  }
}
