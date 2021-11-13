import { Price, Rarity } from '@typings/item'
import Item from './Item'
import { ReceiverLabel } from './Receiver'

export interface WeaponPartData {
  rarity?: Rarity
  price?: Price
  labels: ReceiverLabel[]
  name: string
  damage?: number
  fireRate?: number
  ammo?: [number, number]
  reload?: number
  swapRate?: number
  spread?: {
    aim?: number
    hip?: number
    move?: number
  }
  recoil?: number
  zoom?: number
  scopeIn?: number
  range?: [number, number]
  run?: number
  missingData?: boolean // For if wiki is missing info
}

export default abstract class WeaponPart extends Item {
  public labels: ReceiverLabel[]
  public name: string
  public damage: number
  public fireRate: number
  public ammo: [number, number]
  public reload: number
  public swapRate: number
  public spread: {
    aim: number
    hip: number
    move: number
  }
  public recoil: number
  public zoom: number
  public scopeIn: number
  public range: [number, number]
  public run: number
  public missingData: boolean

  constructor(data: WeaponPartData) {
    super({
      rarity: data.rarity ?? 'Common',
      price: data.price ?? {
        gp: [0, 0],
        zen: [0, 0]
      }
    })

    this.labels = data.labels
    this.name = data.name
    this.damage = data.damage ?? 0
    this.fireRate = data.fireRate ?? 0
    this.ammo = data.ammo ?? [0, 0]
    this.reload = data.reload ?? 0
    this.swapRate = data.swapRate ?? 0
    this.spread = {
      aim: data.spread?.aim ?? 0,
      hip: data.spread?.hip ?? 0,
      move: data.spread?.move ?? 0
    }
    this.recoil = data.recoil ?? 0
    this.zoom = data.zoom ?? 0
    this.scopeIn = data.scopeIn ?? 0
    this.range = data.range ?? [0, 0]
    this.run = data.run ?? 0
    this.missingData = data.missingData ?? false
  }
}
