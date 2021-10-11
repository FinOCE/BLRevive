import Stock from '../Stock'

export default class extends Stock {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'MMRS BP-SR Tactical' // FOR BURSTFIRE RIFLE
    })
  }
}
