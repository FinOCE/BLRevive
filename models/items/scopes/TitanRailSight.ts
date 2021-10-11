import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      labels: [
        'AK470',
        'AMR',
        'AR',
        'BAR',
        'BPFA',
        'BFR',
        'BFS',
        'CR',
        'CB',
        'HAR',
        'LMG',
        'LRR',
        'LMGR',
        'M4X',
        'SMG',
        'TAR',
        'TSMG',
        'BLP',
        'HP',
        'LP',
        'MP',
        'REV',
        'SHOT',
        'SARK'
      ],
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Titan Rail Sight'
    })
  }
}
