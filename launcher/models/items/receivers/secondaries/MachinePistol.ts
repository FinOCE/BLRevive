import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      labels: ['MP'],
      name: 'Machine Pistol',
      type: 'Secondary',
      damage: 30,
      ammo: [25, 50],
      reload: 1.83,
      fireMode: 'Automatic',
      fireRate: 850,
      zoom: 1.3,
      spread: {
        aim: 2.29,
        hip: 4.58,
        move: 4.73
      },
      recoil: 8.5,
      scopeIn: 0.22,
      range: [10, 20],
      run: 7.92
    })
  }
}
