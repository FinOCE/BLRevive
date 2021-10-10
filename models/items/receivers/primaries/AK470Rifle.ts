import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'AK470 Rifle',
      type: 'Primary',
      damage: 48,
      ammo: [30, 120],
      reload: 2.67,
      fireMode: 'Automatic',
      fireRate: 650,
      zoom: 1.3,
      spread: {
        aim: 0.77,
        hip: 2.44,
        move: 4.69
      },
      recoil: 50.11,
      scopeIn: 0.22,
      range: [45, 70],
      run: 7.65
    })
  }
}
