import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan DRM-01 AR',
      ammo: [20, 80],
      run: -0.16
    })
  }
}
