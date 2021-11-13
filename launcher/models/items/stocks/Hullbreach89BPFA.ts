import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Hullbreach 89-BPFA', // FOR BULLPUP FULL AUTO
      spread: {
        aim: -0.02,
        hip: -0.05,
        move: 1.19
      },
      recoil: -0.06,
      scopeIn: 0.04,
      range: [4, 4],
      run: -0.18
    })
  }
}
