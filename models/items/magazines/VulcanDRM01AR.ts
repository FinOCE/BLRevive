import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan DRM-01 AR',
      ammo: [20, 80],
      run: -0.16
    })
  }
}
