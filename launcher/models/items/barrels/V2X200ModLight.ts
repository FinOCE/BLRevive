import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      labels: ['LP'],
      name: 'V2 X200 Mod',
      damage: 4,
      spread: {
        aim: -0.18,
        hip: -0.46,
        move: 0.28
      },
      scopeIn: 0.08,
      range: [2, 2],
      run: -0.55
    })
  }
}
