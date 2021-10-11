import Receiver from '../../Receiver'

export default class extends Receiver {
  constructor() {
    super({
      rarity: null,
      price: {
        gp: [300, 25200],
        zen: [35, 300]
      },
      labels: ['LMGR'],
      name: 'LMG Recon',
      type: 'Primary',
      damage: 68,
      ammo: [65, 195],
      reload: 4,
      fireMode: 'Automatic',
      fireRate: 450,
      zoom: 1.3,
      spread: {
        aim: 1.26,
        hip: 2.29,
        move: 3.78
      },
      recoil: 77.68,
      scopeIn: 0.22,
      range: [45, 65],
      run: 7.29
    })
  }
}
