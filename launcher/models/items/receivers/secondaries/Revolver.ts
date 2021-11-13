import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      labels: ['REV'],
      name: 'Revolver',
      type: 'Secondary',
      damage: 97,
      ammo: [6, 12],
      reload: 2.37,
      fireMode: 'Semi-Automatic',
      fireRate: 200,
      zoom: 1.3,
      spread: {
        aim: 0.92,
        hip: 2.29,
        move: 4.53
      },
      recoil: 90.38,
      scopeIn: 0.22,
      range: [25, 30],
      run: 7.79
    })
  }
}
