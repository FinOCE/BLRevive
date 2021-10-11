import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Titan Extended Barrel',
      spread: {
        aim: -0.06,
        hip: -0.11,
        move: 0.33
      },
      scopeIn: -0.02,
      range: [2, 2],
      run: -0.04
    })
  }
}
