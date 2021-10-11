import { WeaponPartData, WeaponPart } from './WeaponPart'

interface ReceiverData extends WeaponPartData {
  type: 'Primary' | 'Secondary'
  fireMode:
    | 'Automatic'
    | 'Single Shot'
    | 'Bolt-Action'
    | '3 Round Burstfire'
    | '4 Round Burstfire'
    | 'Semi-Automatic'
    | 'Bow and Arrow'
}

export default abstract class Receiver extends WeaponPart {
  public type: 'Primary' | 'Secondary'
  public fireMode:
    | 'Automatic'
    | 'Single Shot'
    | 'Bolt-Action'
    | '3 Round Burstfire'
    | '4 Round Burstfire'
    | 'Semi-Automatic'
    | 'Bow and Arrow'

  constructor(data: ReceiverData) {
    data.swapRate = data.swapRate ?? 20

    super(data)

    this.type = data.type
    this.fireMode = data.fireMode
  }
}
