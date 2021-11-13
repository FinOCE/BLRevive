import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Frontier Ultralight Stock',
      spread: {
        aim: 0.08,
        hip: 0.15,
        move: -0.3
      },
      recoil: 0.06,
      scopeIn: -0.03,
      range: [-2, -2],
      run: 0.08
    })
  }
}
