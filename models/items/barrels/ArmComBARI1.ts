import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'ArmCom BARI1', // FOR BULLPUP FULL AUTO
      spread: {
        aim: -0.38,
        hip: -0.33,
        move: -0.2
      },
      scopeIn: 0.04,
      range: [7, 10],
      run: -0.3
    })
  }
}
