import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      labels: ['SMG'],
      name: 'Submachine Gun',
      type: 'Primary',
      damage: 33,
      ammo: [45, 180],
      reload: 2.7,
      fireMode: 'Automatic',
      fireRate: 900,
      zoom: 1.3,
      spread: {
        aim: 1.15,
        hip: 3.72,
        move: 3.97
      },
      recoil: 13.21,
      scopeIn: 0.22,
      range: [12, 45],
      run: 7.92
    })
  }
}
