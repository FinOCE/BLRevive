import WeaponPart, { WeaponPartData } from './WeaponPart'

export default abstract class Magazine<T> extends WeaponPart {
  constructor(data: WeaponPartData) {
    super(
      Object.assign(data, {
        rarity: 'Common',
        price: {
          gp: [120, 3920],
          zen: [25, 75]
        },
        missingData: true // A lot of magazines are missing data (e.g. reload speed)
      })
    )
  }
}
