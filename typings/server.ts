import Map from '../utils/Map'
import Gamemode from '../utils/Gamemode'
import { GamemodeName, MapName } from './game'

export type ServerOptions = {
  map: Map
  gamemode: Gamemode
  playlist: Gamemode
  bots: number
  timeLimit: number
  autoRestart: boolean
  startingCP: number
  name: string
  port: number
  maxPlayers: number
}

export type RawServerOptions = {
  map: MapName
  gamemode: GamemodeName
  playlist: GamemodeName
  bots: number
  timeLimit: number
  autoRestart: boolean
  startingCP: number
  name: string
  port: number
  maxPlayers: number
}

export type ServerStats = {
  playerCount: number
  currentMap: MapName
}
