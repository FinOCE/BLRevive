import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'Light Machine Gun',
      type: 'Primary',
      damage: 55,
      ammo: [150, 450],
      reload: 6.67,
      fireMode: 'Automatic',
      fireRate: 650,
      zoom: 1.3,
      spread: {
        aim: 1.72,
        hip: 2.86,
        move: 8.64
      },
      recoil: 26.02,
      scopeIn: 0.22,
      range: [45, 65],
      run: 7.2
    })
  }
}
