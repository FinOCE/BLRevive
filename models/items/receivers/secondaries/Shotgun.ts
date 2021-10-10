import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      name: 'Shotgun',
      type: 'Secondary',
      damage: 23,
      ammo: [8, 32],
      reload: 3.73,
      fireMode: 'Semi-Automatic',
      fireRate: 100,
      zoom: 1.3,
      spread: {
        aim: 0.52,
        hip: 1.72,
        move: 2.28
      },
      recoil: 59.29,
      scopeIn: 0.22,
      range: [7, 20],
      run: 7.73
    })
  }
}
