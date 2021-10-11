import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Overmatch M-CV Breach', // FOR SHOTGUN
      damage: 0,
      spread: {
        aim: 0.06,
        hip: 0.23,
        move: 0.14
      },
      recoil: 0,
      scopeIn: -0.03,
      range: [-2, -2],
      run: 0.18
    })
  }
}
