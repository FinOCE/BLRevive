import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      labels: ['HP'],
      name: 'V2 Z900 Mod',
      damage: 7,
      spread: {
        aim: -0.04,
        hip: -0.12,
        move: 0.88
      },
      scopeIn: 0.08,
      range: [0, 1],
      run: -0.55
    })
  }
}
