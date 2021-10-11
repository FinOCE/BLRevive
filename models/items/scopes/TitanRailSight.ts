import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Titan Rail Sight'
    })
  }
}
