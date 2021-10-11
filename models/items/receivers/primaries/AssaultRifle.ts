import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Assault Rifle',
      type: 'Primary',
      damage: 45,
      ammo: [30, 120],
      reload: 2.4,
      fireMode: 'Automatic',
      fireRate: 650,
      zoom: 1.3,
      spread: {
        aim: 0.8,
        hip: 2.29,
        move: 4.15
      },
      recoil: 26.9,
      scopeIn: 0.22,
      range: [40, 70],
      run: 7.65
    })
  }
}
