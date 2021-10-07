import Map from '../utils/Map'
import Gamemode from '../utils/Gamemode'

export type ServerOptions = {
  map: Map
  gamemode: Gamemode
  playlist: Gamemode
  bots: number
  timeLimit: number
  autoRestart: boolean
  startingCP: number
}
