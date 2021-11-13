import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      rarity: 'Rare',
      name: 'Aim Point Ammo Counter',
      showsAmmo: true,
      zoom: 0.7
    })
  }
}
