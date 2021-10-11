import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Krane Assault Barrel',
      damage: 1,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.3
      },
      scopeIn: 0.01,
      range: [-1, -1],
      run: -0.02
    })
  }
}
