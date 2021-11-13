import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Silverwood Compensator Stock',
      spread: {
        aim: -0.03,
        hip: -0.06,
        move: 0.86
      },
      recoil: -0.12,
      scopeIn: 0.04,
      range: [1, 1],
      run: -0.08
    })
  }
}
