import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['TAR'],
      name: 'Tactical Assault Rifle',
      type: 'Primary',
      damage: 55,
      ammo: [20, 80],
      reload: 2.4,
      fireMode: 'Automatic',
      fireRate: 450,
      zoom: 1.3,
      spread: {
        aim: 0.8,
        hip: 2.29,
        move: 4.15
      },
      recoil: 40.53,
      scopeIn: 0.22,
      range: [50, 80],
      run: 7.65
    })
  }
}
