import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Hullbreach 057BAR', // FOR BULLPUP FULL AUTO
      spread: {
        aim: 0.39,
        hip: 0.26,
        move: 0.28
      },
      recoil: -0.2,
      scopeIn: -0.01,
      range: [-6, -8],
      run: 0.05
    })
  }
}
