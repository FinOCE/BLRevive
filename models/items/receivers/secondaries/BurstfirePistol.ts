import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      labels: ['BFP'],
      name: 'Burstfire Pistol',
      type: 'Secondary',
      damage: 48,
      ammo: [12, 36],
      reload: 1.57,
      fireMode: 'Automatic',
      fireRate: 600,
      zoom: 1.3,
      spread: {
        aim: 1.09,
        hip: 2.72,
        move: 3.61
      },
      recoil: 4.62,
      scopeIn: 0.22,
      range: [10, 50],
      run: 8.1
    })
  }
}
