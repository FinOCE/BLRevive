import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan STD-05E AR',
      reload: -0.31,
      run: 0.02
    })
  }
}
