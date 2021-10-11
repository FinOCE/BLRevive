import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan STD-02L AR',
      run: 0.04
    })
  }
}
