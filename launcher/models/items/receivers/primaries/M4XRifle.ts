import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['M4X'],
      name: 'M4X Rifle',
      type: 'Primary',
      damage: 39,
      ammo: [30, 120],
      reload: 2.67,
      fireMode: 'Automatic',
      fireRate: 750,
      zoom: 1.3,
      spread: {
        aim: 0.8,
        hip: 2.29,
        move: 4.23
      },
      recoil: 37.76,
      scopeIn: 0.22,
      range: [25, 40],
      run: 7.79
    })
  }
}
