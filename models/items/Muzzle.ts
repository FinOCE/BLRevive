import Item from './Item'

export default abstract class Muzzle extends Item {
  public name: string
  public damage: number | null
  public spread: {
    aim: number | null
    hip: number | null
    move: number | null
  }
  public recoil: number | null
  public range: [number, number] | [null, null]

  constructor(data: Muzzle) {
    super({
      rarity: data.rarity,
      price: data.price
    })

    this.name = data.name
    this.damage = data.damage
    this.spread = data.spread
    this.recoil = data.recoil
    this.range = data.range
  }
}
