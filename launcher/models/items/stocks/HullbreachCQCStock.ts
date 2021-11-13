import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Hullbreach CQC Stock',
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: -0.16
      },
      recoil: 0.04,
      scopeIn: -0.01,
      range: [-1, -1],
      run: 0.04
    })
  }
}
