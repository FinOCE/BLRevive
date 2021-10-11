import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan STD-01 AR',
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      }
    })
  }
}
