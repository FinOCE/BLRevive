import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['BPFA'],
      name: 'Bullpup Full Auto',
      type: 'Primary',
      damage: 56,
      ammo: [25, 100],
      reload: 2.83,
      fireMode: 'Automatic',
      fireRate: 550,
      zoom: 1.3,
      spread: {
        aim: 1.15,
        hip: 2.38,
        move: 2.75
      },
      recoil: 21.84,
      scopeIn: 0.2,
      range: [30, 35],
      run: 7.96
    })
  }
}
