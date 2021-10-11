import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Frontier Standard Barrel',
      damage: 0,
      spread: {
        aim: 0,
        hip: 0,
        move: 0
      },
      recoil: 0,
      scopeIn: 0,
      range: [0, 0],
      run: 0
    })
  }
}
