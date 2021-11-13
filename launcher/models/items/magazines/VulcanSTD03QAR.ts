import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan STD-03Q AR',
      reload: -0.55
    })
  }
}
