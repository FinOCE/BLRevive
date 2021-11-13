import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Ogre CQC Barrel',
      damage: 1,
      spread: {
        aim: 0.06,
        hip: 0.12,
        move: 0.14
      },
      range: [-2, -2]
    })
  }
}
