import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'V2 Z900 Mod', // FOR HEAVY PISTOL, ALLOWS STOCK
      damage: 7,
      spread: {
        aim: -0.04,
        hip: -0.12,
        move: 0.88
      },
      recoil: 0,
      scopeIn: 0.08,
      range: [0, 1],
      run: -0.55
    })
  }
}
