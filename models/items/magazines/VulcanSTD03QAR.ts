import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan STD-03Q AR',
      reload: -0.55
    })
  }
}
