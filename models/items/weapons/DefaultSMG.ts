import OvermatchMuzzleShroud from '../muzzles/OvermatchMuzzleShroud'
import SubmachineGun from '../receivers/primaries/SubmachineGun'
import TitanRailSight from '../scopes/TitanRailSight'
import SilverwoodStandardStock from '../stocks/SilverwoodStandardStock'
import Weapon from '../Weapon'

export default class extends Weapon {
  constructor() {
    super({
      name: 'Default SMG',
      barrel: new SilverwoodStandardStock(),
      muzzle: new OvermatchMuzzleShroud(),
      receiver: new SubmachineGun(),
      scope: new TitanRailSight(),
      stock: new SilverwoodStandardStock()
    })
  }
}
