import Server from './models/Server'
import Weapon from './models/items/Weapon'

function testServer() {
  const server = new Server()
  server.start()
}

function testWeapon() {
  const weapon = new Weapon()
  console.log(weapon)
}

testWeapon()
