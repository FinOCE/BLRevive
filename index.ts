import Server from './models/Server'
import DefaultAR from './models/items/weapons/DefaultAR'

function testServer() {
  const server = new Server()
  server.start()
}

function testWeapon() {
  const weapon = new DefaultAR()
  console.log(weapon)
}

testWeapon()
