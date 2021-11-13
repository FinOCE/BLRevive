import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      labels: [
        'AK470',
        'AMR',
        'AR',
        'BAR',
        'CR',
        'HAR',
        'LMG',
        'LRR',
        'LMGR',
        'M4X',
        'SMG',
        'TAR',
        'HP',
        'LP',
        'SHOT',
        'SARK'
      ],
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Silverwood Compensator Stock'
    })
  }
}
