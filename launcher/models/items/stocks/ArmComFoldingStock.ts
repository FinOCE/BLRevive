import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'ArmCom Folding Stock',
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: -0.4
      },
      recoil: 0.13,
      scopeIn: -0.03,
      range: [-1, -1],
      run: 0.08
    })
  }
}
