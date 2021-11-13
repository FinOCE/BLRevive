import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Taurex Stabilizing Stock',
      spread: {
        aim: -0.06,
        hip: -0.09,
        move: 0.79
      },
      recoil: -0.08,
      scopeIn: 0.04,
      range: [2, 2],
      run: -0.08
    })
  }
}
