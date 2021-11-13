import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['LRR'],
      name: 'Light Recon Rifle',
      type: 'Primary',
      damage: 76,
      ammo: [12, 48],
      reload: 2.33,
      fireMode: 'Semi-Automatic',
      fireRate: 600,
      zoom: 1.3,
      spread: {
        aim: 1.03,
        hip: 2.58,
        move: 3.42
      },
      recoil: 8.08,
      scopeIn: 0.22,
      range: [45, 80],
      run: 8.1
    })
  }
}
