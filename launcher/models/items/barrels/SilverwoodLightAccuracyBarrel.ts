import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Silverwood Light Accuracy Barrel',
      damage: -3,
      spread: {
        aim: -0.15,
        hip: -0.28,
        move: -0.56
      },
      scopeIn: -0.01,
      range: [5, 5],
      run: 0.04
    })
  }
}
