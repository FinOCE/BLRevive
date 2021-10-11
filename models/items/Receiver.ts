import WeaponPart, { WeaponPartData } from './WeaponPart'

export type ReceiverLabel =
  | 'AK470'
  | 'AMR'
  | 'AR'
  | 'BAR'
  | 'BPFA'
  | 'BFR'
  | 'BFS'
  | 'CR'
  | 'CB'
  | 'HAR'
  | 'LMG'
  | 'LRR'
  | 'LMGR'
  | 'M4X'
  | 'SMG'
  | 'TAR'
  | 'TSMG'
  | 'BLP'
  | 'BFP'
  | 'HP'
  | 'LP'
  | 'MP'
  | 'REV'
  | 'SHOT'
  | 'SARK'
  | 'SNUB'

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
  public label: ReceiverLabel
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

    this.label = data.labels[0]
    this.type = data.type
    this.fireMode = data.fireMode
  }
}
