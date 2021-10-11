import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Krane Ultralight Stock',
      spread: {
        aim: 0.08,
        hip: 0.15,
        move: -0.12
      },
      scopeIn: -0.02,
      range: [-3, -3],
      run: 0.05
    })
  }
}
