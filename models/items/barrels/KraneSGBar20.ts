import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Krane SG Bar-20', // FOR SHOTGUN
      damage: 2,
      spread: {
        aim: 0.1,
        hip: 0.34,
        move: 0.54
      },
      recoil: 0,
      scopeIn: 0.01,
      range: [-3, -3],
      run: -0.04
    })
  }
}
