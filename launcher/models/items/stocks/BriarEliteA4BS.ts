import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'ArmCom Elite A4-BS', // FOR BULLPUP FULL AUTO
      spread: {
        aim: -0.04,
        hip: -0.08,
        move: 1.13
      },
      recoil: -0.01,
      scopeIn: 0.06,
      range: [6, 6],
      run: -0.18
    })
  }
}
