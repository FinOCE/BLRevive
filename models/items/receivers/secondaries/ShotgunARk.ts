import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      name: 'Shotgun AR-k',
      type: 'Secondary',
      damage: 20,
      ammo: [10, 20],
      reload: 7.67,
      fireMode: 'Automatic',
      fireRate: 250,
      zoom: 1.3,
      spread: {
        aim: 0.43,
        hip: 1.43,
        move: 1.9
      },
      recoil: 5.75,
      scopeIn: 0.22,
      range: [12, 25],
      run: 7.65
    })
  }
}
