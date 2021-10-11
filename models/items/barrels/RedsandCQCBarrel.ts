import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Redsand CQC Barrel',
      damage: 1,
      spread: {
        aim: 0.18,
        hip: 0.35,
        move: -0.08
      },
      scopeIn: -0.03,
      range: [-6, -6],
      run: 0.08
    })
  }
}
