import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'ArmCom Compensator Stock',
      spread: {
        aim: 0.06,
        hip: 0.12,
        move: 1.08
      },
      recoil: -0.23,
      scopeIn: 0.04,
      range: [-2, -2],
      run: -0.08
    })
  }
}
