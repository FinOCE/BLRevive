import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan STD-04XL AR',
      ammo: [10, 40],
      run: -0.04
    })
  }
}
