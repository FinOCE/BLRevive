import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Krane Extender Stock',
      spread: {
        aim: -0.07,
        hip: -0.14,
        move: 0.16
      },
      recoil: 0.11,
      range: [2, 2]
    })
  }
}
