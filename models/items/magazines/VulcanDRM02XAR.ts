import Magazine from '../Magazine'

export default class extends Magazine<'AR'> {
  constructor() {
    super({
      name: 'Vulcan DRM-02X AR',
      ammo: [40, 160],
      run: -0.28
    })
  }
}
