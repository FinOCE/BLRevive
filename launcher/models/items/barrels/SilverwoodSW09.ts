import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Silverwood SW-09',
      damage: -3,
      spread: {
        aim: -0.06,
        hip: -0.11,
        move: 0.41
      },
      scopeIn: -0.03,
      range: [2, 2],
      run: 0.08
    })
  }
}
