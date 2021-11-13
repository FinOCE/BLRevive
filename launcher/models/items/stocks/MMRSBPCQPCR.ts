import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'MMRS BP-CQ PCR', // FOR BURSTFIRE RIFLE
      spread: {
        aim: 0.1,
        hip: 0.23,
        move: 1.41
      },
      recoil: -0.08,
      scopeIn: 0.03,
      range: [-4, -4],
      run: -0.13
    })
  }
}
