import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar BAR Grip', // FOR BULLPUP FULL AUTO
      spread: {
        move: 0.09
      },
      recoil: -0.2,
      scopeIn: 0.02,
      run: -0.18
    })
  }
}
