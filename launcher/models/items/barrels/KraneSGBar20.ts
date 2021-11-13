import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Krane SG Bar-20', // FOR SHOTGUN
      damage: 2,
      spread: {
        aim: 0.1,
        hip: 0.34,
        move: 0.54
      },
      scopeIn: 0.01,
      range: [-3, -3],
      run: -0.04
    })
  }
}
