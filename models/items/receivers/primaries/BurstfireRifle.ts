import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['BFR'],
      name: 'Burstfire Rifle',
      type: 'Primary',
      damage: 54,
      ammo: [15, 60],
      reload: 3.13,
      fireMode: '3 Round Burstfire',
      fireRate: 725,
      zoom: 1.3,
      spread: {
        aim: 0.2,
        hip: 1.72,
        move: 5.07
      },
      recoil: 32.36,
      scopeIn: 0.22,
      range: [60, 100],
      run: 7.51
    })
  }
}
