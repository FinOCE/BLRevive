import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan STD-01 AR',
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      }
    })
  }
}
