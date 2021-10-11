import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['CB'],
      name: 'Compound Bow',
      type: 'Primary',
      damage: 240,
      ammo: [1, 10],
      reload: 0.7,
      fireMode: 'Bow and Arrow',
      fireRate: 69,
      zoom: 1.3,
      spread: {
        aim: 1.15,
        hip: 1.15,
        move: 5.99
      },
      recoil: 0,
      scopeIn: 0.22,
      range: [80, 100],
      run: 7.65
    })
  }
}
