import Item from './Item'

export default abstract class Muzzle extends Item {
  public name: string
  public aim: number
  public hip: number
  public move: number
  public recoil: number
  public range: [number, number]

  constructor(data: Muzzle) {
    super({
      rarity: data.rarity,
      price: data.price
    })

    this.name = data.name
    this.aim = data.aim
    this.hip = data.hip
    this.move = data.move
    this.recoil = data.recoil
    this.range = data.range
  }
}
