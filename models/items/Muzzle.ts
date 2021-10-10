import Item from './Item'

export default abstract class Muzzle extends Item {
  public name: string
  public damage: number | null
  public aim: number | null
  public hip: number | null
  public move: number | null
  public recoil: number | null
  public range: [number, number] | [null, null]

  constructor(data: Muzzle) {
    super({
      rarity: data.rarity,
      price: data.price
    })

    this.name = data.name
    this.damage = data.damage
    this.aim = data.aim
    this.hip = data.hip
    this.move = data.move
    this.recoil = data.recoil
    this.range = data.range
  }
}
