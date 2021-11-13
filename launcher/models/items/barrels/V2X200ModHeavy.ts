import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      labels: ['HP'],
      name: 'V2 X200 Mod',
      damage: 4,
      spread: {
        aim: -0.18,
        hip: -0.46,
        move: 0.25
      },
      scopeIn: 0.08,
      range: [2, 4],
      run: -0.55
    })
  }
}
