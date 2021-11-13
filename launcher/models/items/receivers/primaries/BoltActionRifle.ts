import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      labels: ['BAR'],
      name: 'Bolt-Action Rifle',
      type: 'Primary',
      damage: 175,
      ammo: [5, 20],
      reload: 4.37,
      fireMode: 'Bolt-Action',
      fireRate: 60,
      zoom: 1.3,
      spread: {
        aim: 0,
        hip: 6.88,
        move: 13.21
      },
      recoil: 18.06,
      scopeIn: 0.22,
      range: [80, 130],
      run: 7.2
    })
  }
}
