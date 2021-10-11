import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Silverwood CQC Barrel',
      spread: {
        aim: 0.06,
        hip: 0.12,
        move: -0.1
      },
      scopeIn: -0.01,
      range: [-2, -2],
      run: 0.04
    })
  }
}
