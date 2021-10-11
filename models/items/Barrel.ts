import Item from './Item'

export default abstract class Barrel extends Item {
  public name: string
  public damage: number | null
  public spread: {
    aim: number | null
    hip: number | null
    move: number | null
  }
  public recoil: number | null
  public scopeIn: number | null
  public range: [number, number] | [null, null]
  public run: number | null

  constructor(data: Barrel) {
    super({
      rarity: data.rarity,
      price: data.price
    })

    this.name = data.name
    this.damage = data.damage
    this.spread = data.spread
    this.recoil = data.recoil
    this.scopeIn = data.scopeIn
    this.range = data.range
    this.run = data.run
  }
}
