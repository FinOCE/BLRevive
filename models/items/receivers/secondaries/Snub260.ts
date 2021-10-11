import Receiver from '../../Receiver'

export default class extends Receiver<'SNUB'> {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 16800],
        zen: [35, 300]
      },
      name: 'Snub 260',
      type: 'Secondary',
      damage: 60,
      ammo: [8, 16],
      reload: 2.67,
      fireMode: 'Semi-Automatic',
      fireRate: 600,
      zoom: 1.3,
      spread: {
        aim: 1.15,
        hip: 2.86,
        move: 5.66
      },
      recoil: 32.28,
      scopeIn: 0.22,
      range: [10, 15],
      run: 7.79
    })
  }
}
