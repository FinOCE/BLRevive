import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'V2 X200 Mod', // FOR LIGHT PISTOL, ALLOWS STOCK
      damage: 4,
      spread: {
        aim: -0.18,
        hip: -0.46,
        move: 0.28
      },
      recoil: 0,
      scopeIn: 0.08,
      range: [2, 2],
      run: -0.55
    })
  }
}
