import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar Accuracy Barrel',
      damage: -1,
      spread: {
        aim: -0.12,
        hip: -0.23,
        move: 0.19
      },
      scopeIn: 0.02,
      range: [4, 4],
      run: 0.04
    })
  }
}
