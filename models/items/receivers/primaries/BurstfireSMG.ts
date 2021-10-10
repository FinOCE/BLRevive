import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'Burstfire SMG',
      type: 'Primary',
      damage: 30,
      ammo: [33, 132],
      reload: 2.4,
      fireMode: '4 Round Burstfire',
      fireRate: 850,
      zoom: 1.3,
      spread: {
        aim: 0.86,
        hip: 1.72,
        move: 2.84
      },
      recoil: 2.12,
      scopeIn: 0.22,
      range: [10, 50],
      run: 7.88
    })
  }
}
