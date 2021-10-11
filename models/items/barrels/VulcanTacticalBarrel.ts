import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Vulcan Tactical Barrel',
      damage: 1,
      spread: {
        aim: -0.06,
        hip: -0.11,
        move: 0.79
      },
      scopeIn: 0.04,
      range: [2, 2],
      run: -0.08
    })
  }
}
