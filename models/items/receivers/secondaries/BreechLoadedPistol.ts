import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      name: 'Breech Loaded Pistol',
      type: 'Secondary',
      damage: 250,
      ammo: [1, 2],
      reload: 2.4,
      fireMode: 'Single Shot',
      fireRate: 400,
      zoom: 1.3,
      spread: {
        aim: 0.92,
        hip: 2.29,
        move: 4.53
      },
      recoil: 7.17,
      scopeIn: 0.22,
      range: [Infinity, Infinity],
      run: 7.88
    })
  }
}
