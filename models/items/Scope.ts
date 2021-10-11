import { Price, Rarity } from '@typings/item'
import Item from './Item'

interface ScopeData {
  rarity?: Rarity
  price?: Price
  name: string
  showsAmmo?: boolean
  infrared?: boolean
  zoom?: number
  scopeIn?: number
}

export default abstract class Scope extends Item {
  public name: string
  public showsAmmo: boolean
  public infrared: boolean
  public zoom: number
  public scopeIn: number

  constructor(data: ScopeData) {
    super({
      rarity: data.rarity ?? 'Uncommon',
      price: data.price ?? {
        gp: [120, 5600],
        zen: [10, 150]
      }
    })

    this.name = data.name
    this.showsAmmo = data.showsAmmo ?? false
    this.infrared = data.infrared ?? false
    this.zoom = data.zoom ?? 0
    this.scopeIn = data.scopeIn ?? 0
  }
}
