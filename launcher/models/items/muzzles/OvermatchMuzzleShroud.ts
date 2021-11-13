import Muzzle from '../Muzzle'

export default class extends Muzzle {
  constructor() {
    super({
      labels: [
        'AK470',
        'AR',
        'BAR',
        'BPFA',
        'BFR',
        'BFS',
        'CR',
        'HAR',
        'LMG',
        'LRR',
        'LMGR',
        'M4X',
        'SMG',
        'TAR',
        'TSMG',
        'HP',
        'LP',
        'MP'
      ],
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Overmatch Muzzle Shroud'
    })
  }
}
