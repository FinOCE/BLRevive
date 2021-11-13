import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Vulcan Extender Stock',
      spread: {
        aim: -0.69,
        hip: -0.17,
        move: 0.49
      },
      recoil: 0.03,
      scopeIn: 0.03,
      range: [3, 3],
      run: -0.06
    })
  }
}
