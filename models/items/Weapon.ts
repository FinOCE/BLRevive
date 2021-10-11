import Barrel from './Barrel'
import FrontierStandardBarrel from './barrels/FrontierStandardBarrel'
import Magazine from './Magazine'
import VulcanSTD01AR from './magazines/VulcanSTD01AR'
import Muzzle from './Muzzle'
import OvermatchMuzzleShroud from './muzzles/OvermatchMuzzleShroud'
import Receiver, { ReceiverLabel } from './Receiver'
import AssaultRifle from './receivers/primaries/AssaultRifle'
import Scope from './Scope'
import TitanRailSight from './scopes/TitanRailSight'
import Stock from './Stock'
import SilverwoodStandardStock from './stocks/SilverwoodStandardStock'
import WeaponPart from './WeaponPart'

interface WeaponParts {
  barrel: Barrel
  muzzle: Muzzle
  receiver: Receiver
  scope: Scope
  stock: Stock
  magazine: Magazine
}

interface WeaponData extends WeaponParts {
  name: string
}

type WeaponStats = Omit<WeaponPart & Receiver & Scope, 'rarity' | 'name' | 'label' | 'labels' | 'missingData'>

export default class Weapon {
  public name?: string
  public label?: ReceiverLabel
  public parts: Partial<WeaponParts> = {}
  public stats: WeaponStats

  constructor() {
    this.setReceiver(new AssaultRifle())
    this.setBarrel(new FrontierStandardBarrel())
    this.setMagazine(new VulcanSTD01AR())
    this.setMuzzle(new OvermatchMuzzleShroud())
    this.setScope(new TitanRailSight())
    this.setStock(new SilverwoodStandardStock())
    this.stats = this.generateStats()
  }

  private generateStats(): WeaponStats {
    const stats: WeaponStats = {
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      damage: 0,
      fireRate: 0,
      ammo: [0, 0],
      reload: 0,
      swapRate: 0,
      spread: {
        aim: 0,
        hip: 0,
        move: 0
      },
      recoil: 0,
      zoom: 0,
      scopeIn: 0,
      range: [0, 0],
      run: 0,
      type: this.parts.receiver!.type,
      fireMode: this.parts.receiver!.fireMode,
      showsAmmo: this.parts.scope?.showsAmmo ?? false,
      infrared: this.parts.scope?.infrared ?? false
    }

    for (const name in this.parts) {
      const part = this.parts[name as keyof WeaponParts]
      if (!part) continue

      stats.price.gp[0] += part.price.gp[0]
      stats.price.gp[1] += part.price.gp[1]
      stats.price.zen[0] += part.price.zen[0]
      stats.price.zen[1] += part.price.zen[1]
      stats.damage += part.damage
      stats.fireRate += part.fireRate
      stats.ammo[0] += part.ammo[0]
      stats.ammo[1] += part.ammo[1]
      stats.reload += part.reload
      stats.swapRate += part.swapRate
      stats.spread.aim += part.spread.aim
      stats.spread.hip += part.spread.hip
      stats.spread.move += part.spread.move
      stats.recoil += part.recoil
      stats.zoom += part.zoom
      stats.scopeIn += part.scopeIn
      stats.range[0] += part.range[0]
      stats.range[1] += part.range[1]
      stats.run += part.run
    }

    return stats
  }

  public setName(name: string) {
    this.name = name
  }

  public setReceiver(receiver: Receiver) {
    this.parts.receiver = receiver
    this.label = receiver.label
    this.stats = this.generateStats()
  }

  public setBarrel(barrel: Barrel) {
    if (barrel.labels.indexOf(this.parts.receiver!.label) === -1) throw 'Invalid barrel!'
    this.parts.barrel = barrel
    this.stats = this.generateStats()
  }

  public setMagazine(magazine: Magazine) {
    if (magazine.labels.indexOf(this.parts.receiver!.label) === -1) throw 'Invalid magazine!'
    this.parts.magazine = magazine
    this.stats = this.generateStats()
  }

  public setMuzzle(muzzle: Muzzle) {
    if (muzzle.labels.indexOf(this.parts.receiver!.label) === -1) throw 'Invalid muzzle!'
    this.parts.muzzle = muzzle
    this.stats = this.generateStats()
  }

  public setScope(scope: Scope) {
    if (scope.labels.indexOf(this.parts.receiver!.label) === -1) throw 'Invalid scope!'
    this.parts.scope = scope
    this.stats = this.generateStats()
  }

  public setStock(stock: Stock) {
    if (stock.labels.indexOf(this.parts.receiver!.label) === -1) throw 'Invalid stock!'
    if (['HP', 'LP'].indexOf(this.parts.receiver!.label) && !this.parts.barrel)
      throw 'Cannot use stock on Light/Heavy Pistol without V2 X200 Mod or V2 Z900 Mod'
    this.parts.stock = stock
    this.stats = this.generateStats()
  }
}
