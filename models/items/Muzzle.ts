import { Price, Rarity } from '@typings/item'
import Item from './Item'

interface MuzzleData {
  rarity?: Rarity
  price?: Price
  name: string
  damage?: number
  spread?: {
    aim?: number
    hip?: number
    move?: number
  }
  recoil?: number
  range?: [number, number]
  missingData?: boolean
}

export default abstract class Muzzle extends Item {
  public name: string
  public damage: number
  public spread: {
    aim: number
    hip: number
    move: number
  }
  public recoil: number
  public range: [number, number]
  public missingData: boolean

  constructor(data: MuzzleData) {
    super({
      rarity: data.rarity ?? 'Uncommon',
      price: data.price ?? {
        gp: [120, 3920],
        zen: [10, 75]
      }
    })

    this.name = data.name
    this.damage = data.damage ?? 0
    this.spread = {
      aim: data.spread?.aim ?? 0,
      hip: data.spread?.hip ?? 0,
      move: data.spread?.move ?? 0
    }
    this.recoil = data.recoil ?? 0
    this.range = data.range ?? [0, 0]
    this.missingData = data.missingData ?? false
  }
}
