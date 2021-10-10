import { Price, Rarity } from '@typings/item'

export default abstract class Item {
  public rarity: Rarity
  public price: Price

  constructor(data: Item) {
    this.rarity = data.rarity
    this.price = data.price
  }
}
