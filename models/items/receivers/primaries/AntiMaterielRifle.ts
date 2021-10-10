import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'Anti-Materiel Rifle',
      type: 'Primary',
      damage: 300,
      ammo: [1, 9],
      reload: 4.7,
      fireMode: 'Single Shot',
      fireRate: 120,
      zoom: 1.3,
      spread: {
        aim: 0.2,
        hip: 28.65,
        move: 121.75
      },
      recoil: 36.1,
      scopeIn: 0.5,
      range: [180, 200],
      run: 6.75
    })
  }
}
