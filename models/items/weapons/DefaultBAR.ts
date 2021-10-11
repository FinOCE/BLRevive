import OvermatchMuzzleShroud from '../muzzles/OvermatchMuzzleShroud'
import BoltActionRifle from '../receivers/primaries/BoltActionRifle'
import TitanRailSight from '../scopes/TitanRailSight'
import SilverwoodStandardStock from '../stocks/SilverwoodStandardStock'
import Weapon from '../Weapon'

export default class extends Weapon {
  constructor() {
    super({
      name: 'Default BAR',
      barrel: new SilverwoodStandardStock(),
      muzzle: new OvermatchMuzzleShroud(),
      receiver: new BoltActionRifle(),
      scope: new TitanRailSight(),
      stock: new SilverwoodStandardStock()
    })
  }
}
