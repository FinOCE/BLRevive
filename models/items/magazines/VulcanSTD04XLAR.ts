import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan STD-04XL AR',
      ammo: [10, 40],
      run: -0.04
    })
  }
}
