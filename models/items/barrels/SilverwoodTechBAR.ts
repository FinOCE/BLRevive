import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Silverwood TechBAR', // FOR BULLPUP FULL AUTO
      spread: {
        aim: -0.45,
        hip: -0.4,
        move: -0.24
      },
      scopeIn: 0.05,
      range: [9, 12],
      run: -0.36
    })
  }
}
