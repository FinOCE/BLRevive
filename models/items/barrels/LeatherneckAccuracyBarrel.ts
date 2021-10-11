import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Leatherneck Accuracy Barrel',
      damage: -1,
      spread: {
        aim: -0.18,
        hip: -0.34,
        move: 0.51
      },
      scopeIn: 0.04,
      range: [6, 6],
      run: -0.08
    })
  }
}
