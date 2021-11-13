import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Overmatch Compensator Stock',
      spread: {
        move: 0.7
      },
      recoil: -0.12,
      scopeIn: 0.03,
      run: -0.06
    })
  }
}
