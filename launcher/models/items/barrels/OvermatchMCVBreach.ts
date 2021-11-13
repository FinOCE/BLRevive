import Barrel from '../Barrel'

export default class extends Barrel {
  constructor() {
    super({
      name: 'Overmatch M-CV Breach', // FOR SHOTGUN
      spread: {
        aim: 0.06,
        hip: 0.23,
        move: 0.14
      },
      scopeIn: -0.03,
      range: [-2, -2],
      run: 0.18
    })
  }
}
