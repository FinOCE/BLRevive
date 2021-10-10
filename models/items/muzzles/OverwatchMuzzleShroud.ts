import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Overwatch Muzzle Shroud',
      damage: 0,
      aim: 0,
      hip: 0,
      move: 0,
      recoil: 0,
      range: [0, 0]
    })
  }
}
