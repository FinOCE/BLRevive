import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Krane Tactical Stock',
      spread: {
        aim: -0.03,
        hip: -0.06,
        move: 0.4
      },
      recoil: -0.04,
      scopeIn: 0.02,
      range: [1, 1],
      run: -0.04
    })
  }
}
