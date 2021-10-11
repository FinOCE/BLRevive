import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Titan Assault Barrel',
      damage: 1,
      spread: {
        aim: -0.03,
        hip: -0.06,
        move: 0.63
      },
      scopeIn: 0.03,
      range: [1, 1],
      run: -0.06
    })
  }
}
