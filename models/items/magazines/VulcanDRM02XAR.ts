import Magazine from '../Magazine'

export default class extends Magazine {
  constructor() {
    super({
      labels: ['AR'],
      name: 'Vulcan DRM-02X AR',
      ammo: [40, 160],
      run: -0.28
    })
  }
}
