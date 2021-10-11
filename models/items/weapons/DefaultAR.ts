import OvermatchMuzzleShroud from '../muzzles/OvermatchMuzzleShroud'
import AssaultRifle from '../receivers/primaries/AssaultRifle'
import TitanRailSight from '../scopes/TitanRailSight'
import SilverwoodStandardStock from '../stocks/SilverwoodStandardStock'
import Weapon from '../Weapon'

export default class extends Weapon {
  constructor() {
    super({
      name: 'Default AR',
      barrel: new SilverwoodStandardStock(),
      muzzle: new OvermatchMuzzleShroud(),
      receiver: new AssaultRifle(),
      scope: new TitanRailSight(),
      stock: new SilverwoodStandardStock()
      // TODO: Mag, tag, camo
    })
  }
}
