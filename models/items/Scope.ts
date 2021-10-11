import WeaponPart, { WeaponPartData } from './WeaponPart'

interface ScopeData extends WeaponPartData {
  showsAmmo?: boolean
  infrared?: boolean
}

export default abstract class Scope extends WeaponPart {
  public showsAmmo: boolean
  public infrared: boolean

  constructor(data: ScopeData) {
    super(data)

    this.showsAmmo = data.showsAmmo ?? false
    this.infrared = data.infrared ?? false
  }
}
