import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Uncommon',
      price: {
        gp: [120, 3920],
        zen: [10, 75]
      },
      name: 'Briar BAR-02', // FOR BULLPUP FULL AUTO
      damage: 0,
      spread: {
        aim: -0.23,
        hip: -0.2,
        move: 0.07
      },
      recoil: -0.25,
      scopeIn: 0.06,
      range: [6, 6],
      run: -0.41
    })
  }
}
