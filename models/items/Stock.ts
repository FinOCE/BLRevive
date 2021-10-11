import { Price, Rarity } from '@typings/item'
import Item from './Item'

interface StockData {
  rarity?: Rarity
  price?: Price
  name: string
  spread?: {
    aim?: number
    hip?: number
    move?: number
  }
  recoil?: number
  scopeIn?: number
  range?: [number, number]
  run?: number
}

export default abstract class Stock extends Item {
  public name: string
  public spread: {
    aim: number
    hip: number
    move: number
  }
  public recoil: number
  public scopeIn: number
  public range: [number, number]
  public run: number

  constructor(data: StockData) {
    super({
      rarity: data.rarity ?? 'Uncommon',
      price: data.price ?? {
        gp: [120, 3500],
        zen: [10, 75]
      }
    })

    this.name = data.name
    this.spread = {
      aim: data.spread?.aim ?? 0,
      hip: data.spread?.hip ?? 0,
      move: data.spread?.move ?? 0
    }
    this.recoil = data.recoil ?? 0
    this.scopeIn = data.scopeIn ?? 0
    this.range = data.range ?? [0, 0]
    this.run = data.run ?? 0
  }
}
