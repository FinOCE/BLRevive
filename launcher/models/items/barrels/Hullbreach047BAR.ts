import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Hullbreach 047BAR', // FOR BULLPUP FULL AUTO
      spread: {
        aim: 0.19,
        hip: 0.13,
        move: 0.19
      },
      recoil: -0.2,
      scopeIn: 0.01,
      range: [-3, -4],
      run: -0.06
    })
  }
}
