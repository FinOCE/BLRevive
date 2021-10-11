import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'MMRS BP-XLi', // FOR BULLPUP FULL AUTO/BURSTFIRE RIFLE
      spread: {
        aim: 0.15,
        hip: 0.35,
        move: 0.04
      },
      scopeIn: 0.02,
      range: [-6, -6],
      run: 0.14
    })
  }
}
