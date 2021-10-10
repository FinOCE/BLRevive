import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      name: 'Heavy Pistol',
      type: 'Secondary',
      damage: 55,
      ammo: [8, 24],
      reload: 1.8,
      fireMode: 'Semi-Automatic',
      fireRate: 600,
      zoom: 1.3,
      spread: {
        aim: 1.03,
        hip: 2.58,
        move: 3.42
      },
      recoil: 5.77,
      scopeIn: 0.22,
      range: [15, 50],
      run: 8.1
    })
  }
}
