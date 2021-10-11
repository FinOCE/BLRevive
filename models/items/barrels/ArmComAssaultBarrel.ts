import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'ArmCom Assault Barrel',
      damage: 3,
      spread: {
        aim: 0.03,
        hip: 0.06,
        move: 1.01
      },
      scopeIn: 0.04,
      range: [-1, -1],
      run: -0.08
    })
  }
}
