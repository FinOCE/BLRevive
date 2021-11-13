import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Briar BAR-02', // FOR BULLPUP FULL AUTO
      spread: {
        aim: -0.23,
        hip: -0.2,
        move: 0.07
      },
      recoil: -0.25,
      scopeIn: 0.06,
      range: [6, 6],
      run: -0.41
    })
  }
}
