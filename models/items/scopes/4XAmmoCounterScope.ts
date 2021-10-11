import Scope from '../Scope'

export default class extends Scope {
  constructor() {
    super({
      rarity: 'Rare',
      name: '4X Ammo Counter Scope',
      showsAmmo: true,
      zoom: 2.7,
      scopeIn: 0.14
    })
  }
}
