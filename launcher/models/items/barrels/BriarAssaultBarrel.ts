import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar Assault Barrel',
      damage: 2,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 0.77
      },
      scopeIn: 0.03,
      range: [-1, -1],
      run: -0.06
    })
  }
}
