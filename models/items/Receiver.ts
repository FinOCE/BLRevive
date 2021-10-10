import Item from './Item'

export default abstract class Receiver extends Item {
  public name: string
  public type: 'Primary' | 'Secondary'
  public damage: number
  public ammo: [number, number] // First value is mag capacity, second value is total ammo
  public reload: number
  public fireMode:
    | 'Automatic'
    | 'Single Shot'
    | 'Bolt-Action'
    | '3 Round Burstfire'
    | '4 Round Burstfire'
    | 'Semi-Automatic'
    | 'Bow and Arrow'
  public fireRate: number
  public zoom: number
  public spread: {
    aim: number
    hip: number
    move: number
  }
  public recoil: number
  public scopeIn: number
  public range: [number, number] // First value is full damage, second value is fall-off
  public run: number

  constructor(data: Receiver) {
    super({
      rarity: data.rarity,
      price: data.price
    })

    this.name = data.name
    this.type = data.type
    this.damage = data.damage
    this.ammo = data.ammo
    this.reload = data.reload
    this.fireMode = data.fireMode
    this.fireRate = data.fireRate
    this.zoom = data.zoom
    this.spread = data.spread
    this.recoil = data.recoil
    this.scopeIn = data.scopeIn
    this.range = data.range
    this.run = data.run
  }
}
