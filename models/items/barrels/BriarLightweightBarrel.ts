import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar Lightweight Barrel',
      spread: {
        aim: 0.12,
        hip: -0.23,
        move: -0.2
      },
      scopeIn: -0.03,
      range: [-4, -4],
      run: 0.08
    })
  }
}
