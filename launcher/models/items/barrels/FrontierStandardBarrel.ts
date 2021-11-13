import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      labels: ['AK470', 'AR', 'BAR', 'BFR', 'CR', 'HAR', 'LMG', 'LRR', 'LMGR', 'M4X', 'SMG', 'TAR'],
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Frontier Standard Barrel'
    })
  }
}
