import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'V2 Folding Stock',
      spread: {
        aim: -0.09,
        hip: -0.17,
        move: -0.43
      },
      recoil: 0.25,
      scopeIn: -0.01,
      range: [3, 3],
      run: 0.04
    })
  }
}
