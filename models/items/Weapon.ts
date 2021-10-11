import Barrel from './Barrel'
import Muzzle from './Muzzle'
import Receiver from './Receiver'
import Scope from './Scope'
import Stock from './Stock'
import { WeaponPart } from './WeaponPart'

interface WeaponData {
  name: string
  barrel: Barrel
  muzzle: Muzzle
  receiver: Receiver
  scope: Scope
  stock: Stock
}

interface WeaponParts {
  barrel: Barrel
  muzzle: Muzzle
  receiver: Receiver
  scope: Scope
  stock: Stock
}

type WeaponStats = Omit<WeaponPart & Receiver & Scope, 'rarity' | 'name' | 'missingData'>

export default class Weapon {
  public name: string
  public parts: {
    barrel: Barrel
    muzzle: Muzzle
    receiver: Receiver
    scope: Scope
    stock: Stock
  }
  public stats: WeaponStats

  constructor(data: WeaponData) {
    this.name = data.name
    this.parts = {
      barrel: data.barrel,
      muzzle: data.muzzle,
      receiver: data.receiver,
      scope: data.scope,
      stock: data.stock
    }
    this.stats = (() => {
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
        type: this.parts.receiver.type,
        fireMode: this.parts.receiver.fireMode,
        showsAmmo: this.parts.scope.showsAmmo,
        infrared: this.parts.scope.infrared
      }

      for (const name in this.parts) {
        const part = this.parts[name as keyof WeaponParts]

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
    })()
  }
}
