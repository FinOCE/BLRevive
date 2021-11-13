import WeaponPart, { WeaponPartData } from './WeaponPart'

export default abstract class Magazine extends WeaponPart {
  constructor(data: WeaponPartData) {
    data.price = data.price ?? {
      gp: [120, 3920],
      zen: [25, 75]
    }

    super(
      Object.assign(data, {
        rarity: 'Common',
        missingData: true // A lot of magazines are missing data (e.g. reload speed)
      })
    )
  }
}
