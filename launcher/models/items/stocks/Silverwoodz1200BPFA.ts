import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      name: 'Silverwood z1200 BPFA', // FOR BULLPUP FULL AUTO/BURSTFIRE RIFLE
      spread: {
        aim: -0.01,
        hip: -0.03,
        move: -0.21
      },
      recoil: 0.04,
      range: [2, 2],
      run: 0.05
    })
  }
}
