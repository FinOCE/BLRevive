import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      rarity: 'Common',
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'No Grip' // FOR BULLPUP FULL AUTO
    })
  }
}
