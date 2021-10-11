import VulcanSTD01AR from '../magazines/VulcanSTD01AR'
import OvermatchMuzzleShroud from '../muzzles/OvermatchMuzzleShroud'
import AssaultRifle from '../receivers/primaries/AssaultRifle'
import TitanRailSight from '../scopes/TitanRailSight'
import SilverwoodStandardStock from '../stocks/SilverwoodStandardStock'
import Weapon from '../Weapon'

export default class extends Weapon<'AR'> {
  constructor() {
    super({
      name: 'Default AR',
      barrel: new SilverwoodStandardStock(),
      muzzle: new OvermatchMuzzleShroud(),
      receiver: new AssaultRifle(),
      scope: new TitanRailSight(),
      stock: new SilverwoodStandardStock(),
      magazine: new VulcanSTD01AR()
    })
  }
}
