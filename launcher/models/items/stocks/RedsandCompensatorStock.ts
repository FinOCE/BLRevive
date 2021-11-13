import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Redsand Compensator Stock',
      spread: {
        move: 0.94
      },
      recoil: -0.15,
      scopeIn: 0.04,
      run: -0.08
    })
  }
}
