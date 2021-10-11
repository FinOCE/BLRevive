import Receiver from '../../Receiver'

export default class extends Receiver<'LP'> {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [0, 0],
        zen: [0, 0]
      },
      name: 'Light Pistol',
      type: 'Secondary',
      damage: 50,
      ammo: [10, 40],
      reload: 1.67,
      fireMode: 'Semi-Automatic',
      fireRate: 600,
      zoom: 1.3,
      spread: {
        aim: 1.06,
        hip: 2.65,
        move: 3.51
      },
      recoil: 2.89,
      scopeIn: 0.22,
      range: [10, 50],
      run: 8.1
    })
  }
}
