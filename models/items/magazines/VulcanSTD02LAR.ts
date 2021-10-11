import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan STD-02L AR',
      run: 0.04
    })
  }
}
