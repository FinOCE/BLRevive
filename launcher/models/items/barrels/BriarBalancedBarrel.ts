import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar Balanced Barrel',
      damage: 2,
      spread: {
        move: 0.94
      },
      scopeIn: 0.04,
      run: -0.08
    })
  }
}
