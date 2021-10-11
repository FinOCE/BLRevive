import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'Tactical SMG',
      type: 'Primary',
      damage: 36,
      ammo: [35, 140],
      reload: 2.67,
      fireMode: 'Automatic',
      fireRate: 950,
      zoom: 1.3,
      spread: {
        aim: 1,
        hip: 2.01,
        move: 2.14
      },
      recoil: 3.98,
      scopeIn: 0.15,
      range: [17, 45],
      run: 8.1
    })
  }
}
