import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar CQC Barrel',
      damage: 4,
      spread: {
        aim: 0.18,
        hip: 0.33,
        move: 0.64
      },
      scopeIn: 0.01,
      range: [-6, -6],
      run: -0.02
    })
  }
}
