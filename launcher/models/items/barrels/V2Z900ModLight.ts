import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      labels: ['LP'],
      name: 'V2 Z900 Mod',
      damage: 7,
      spread: {
        aim: -0.05,
        hip: -0.11,
        move: 0.88
      },
      scopeIn: 0.08,
      run: -0.55
    })
  }
}
