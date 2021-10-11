import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Krane Heavy Assault Barrel',
      damage: 4,
      spread: {
        aim: 0.09,
        hip: 0.16,
        move: 1.15
      },
      scopeIn: 0.04,
      range: [-3, -3],
      run: -0.08
    })
  }
}
