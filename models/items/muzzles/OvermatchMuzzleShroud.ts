import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Overmatch Muzzle Shroud'
    })
  }
}
