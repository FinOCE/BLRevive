import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      name: 'Heavy Assault Rifle',
      type: 'Primary',
      damage: 60,
      ammo: [22, 88],
      reload: 3,
      fireMode: 'Automatic',
      fireRate: 500,
      zoom: 1.3,
      spread: {
        aim: 0.4,
        hip: 2.35,
        move: 7.33
      },
      recoil: 75.31,
      scopeIn: 0.22,
      range: [60, 90],
      run: 7.38
    })
  }
}
