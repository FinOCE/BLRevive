import fs from 'fs'
import ini from 'ini'
import { exec } from 'child_process'
import Map from './Map'
import Gamemode from './Gamemode'
import { RawServerOptions, ServerOptions, ServerStats } from '@typings/server'

export default class Server {
  private static config = 'config.ini'

  public path: string
  public options: ServerOptions
  public stats?: ServerStats // TODO: Get server stats from node-ffi

  constructor() {
    this.path = this.getPathFromFile(Server.config)
    this.options = this.getOptionsFromFile(Server.config)
  }

  /**
   * Start the server process
   */
  public async start(): Promise<void> {
    const process = exec(`start "" "${this.path}" server "${this.createParamString()}"`)

    process.once('spawn', () => {
      // Add color to the console log
      const blue = '\x1b[34m'
      const yellow = '\x1b[33m'
      const white = '\x1b[37m'

      // Log info to user
      console.log(`\n${blue}Your server is starting with these properties:`)
      console.log(
        [
          '',
          `${yellow}Map: ${white}${this.options.map.mapName}`,
          `${yellow}Gamemode: ${white}${this.options.gamemode.gamemodeName}`,
          `${yellow}Playlist: ${white}${this.options.playlist.gamemodeName}`,
          `${yellow}Bot Count: ${white}${this.options.bots}`,
          `${yellow}Time Limit: ${white}${this.options.timeLimit}`,
          `${yellow}Auto Restart: ${white}${this.options.autoRestart}`,
          `${yellow}Starting CP: ${white}${this.options.startingCP}`
        ].join('\n  ')
      )
      console.log(`\n${blue}In a moment a console will open with your operational server.\n`)
    })
  }

  /**
   * Generate parameter string to launch the server
   */
  private createParamString(): string {
    // Map properties to the correct names for the parameters
    const args = Object.entries({
      Name: this.options.name,
      Game: `FoxGame.FoxGameMP_${this.options.gamemode.gamemodeId}`,
      Port: this.options.port,
      BotCount: this.options.bots,
      MaxPlayers: this.options.maxPlayers,
      Playlist: this.options.playlist.gamemodeId
    })
      .map(([key, value]) => `?${key}=${value}`)
      .join()

    return `${this.options.map.mapFileName}${args}`
  }

  /**
   * Read a given `ini` file for server options
   */
  private getOptionsFromFile(file: string): ServerOptions {
    // Get file from path
    const data = fs.readFileSync(file, { encoding: 'utf-8' })
    const rawOptions = ini.parse(data)

    // Replace all valid numbers strings with numbers
    for (const i in rawOptions) {
      const int = parseInt(rawOptions[i])
      if (!isNaN(int)) rawOptions[i] = int
    }

    // Check if the data is correct
    if (!this.isOfTypeRawServerOptions(rawOptions)) throw 'Invalid server options!'

    // Return ServerProperties
    return {
      bots: rawOptions.bots,
      timeLimit: rawOptions.timeLimit,
      autoRestart: rawOptions.autoRestart,
      startingCP: rawOptions.startingCP,
      map: new Map(rawOptions.map),
      gamemode: new Gamemode(rawOptions.gamemode),
      playlist: new Gamemode(rawOptions.playlist),
      name: rawOptions.name,
      port: rawOptions.port,
      maxPlayers: rawOptions.maxPlayers
    }
  }

  /**
   * Read a given `ini` file for the server exe path
   */
  private getPathFromFile(file: string): string {
    const data = fs.readFileSync(file, { encoding: 'utf-8' })
    const { path } = ini.parse(data)
    if (!fs.existsSync(path)) throw 'Given server exe path does not exist!'
    return path as string
  }

  /**
   * Set the map of the server
   */
  public setMap(map: Map): void {
    this.options.map = map
  }

  /**
   * Set the playlist of the server
   */
  public setPlaylist(playlist: Gamemode): void {
    this.options.playlist = playlist
  }

  /**
   * Set the gamemode of the server
   */
  public setGamemode(gamemode: Gamemode): void {
    this.options.gamemode = gamemode
  }

  /**
   * Set the number of bots on the server
   */
  public setBots(count: number): void {
    this.options.bots = count
  }

  /**
   * Set the time limit for each game on the server
   */
  public setTimeLimit(minutes: number): void {
    this.options.timeLimit = minutes
  }

  /**
   * Set if the server should auto-restart
   */
  public setAutoRestart(boolean: boolean): void {
    this.options.autoRestart = boolean
  }

  /**
   * Set the starting CP for players on the server
   */
  public setStartingCP(value: number): void {
    this.options.startingCP = value
  }

  /**
   * Check if a given input matches the type `RawServerOptions`
   */
  isOfTypeRawServerOptions(input: Record<string, unknown>): input is RawServerOptions {
    // TODO: Check if the map, gamemode, and playlist match valid strings
    if (typeof input.map !== 'string') return false
    if (typeof input.gamemode !== 'string') return false
    if (typeof input.playlist !== 'string') return false
    if (typeof input.bots !== 'number' || isNaN(input.bots)) return false
    if (typeof input.timeLimit !== 'number' || isNaN(input.timeLimit)) return false
    if (typeof input.autoRestart !== 'boolean') return false
    if (typeof input.startingCP !== 'number' || isNaN(input.startingCP)) return false
    if (typeof input.name !== 'string') return false
    if (typeof input.port !== 'number') return false
    if (typeof input.maxPlayers !== 'number') return false
    return true
  }
}
