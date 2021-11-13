import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['CR'],
      name: 'Combat Rifle',
      type: 'Primary',
      damage: 92,
      ammo: [9, 36],
      reload: 2.33,
      fireMode: 'Semi-Automatic',
      fireRate: 300,
      zoom: 1.3,
      spread: {
        aim: 0,
        hip: 2.58,
        move: 3.66
      },
      recoil: 30.28,
      scopeIn: 0.22,
      range: [100, 120],
      run: 7.42
    })
  }
}
