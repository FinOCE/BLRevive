import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Raider Snub Barrel',
      damage: 1,
      spread: {
        aim: 0.12,
        hip: 0.23,
        move: 0.03
      },
      scopeIn: -0.01,
      range: [-4, -4],
      run: 0.04
    })
  }
}
