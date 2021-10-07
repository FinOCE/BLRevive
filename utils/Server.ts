import fs from 'fs'
import ini from 'ini'
import { ChildProcess, spawn } from 'child_process'
import Map from './Map'
import Gamemode from './Gamemode'
import { RawServerOptions, ServerOptions } from '@typings/server'

export default class Server {
  public options: ServerOptions
  public process?: ChildProcess

  constructor() {
    this.options = this.getOptionsFromFile('config.ini')
  }

  /**
   * Start the server process
   */
  public async start(): Promise<void> {
    if (this.process) throw 'The server is already running!'
    return new Promise((resolve, reject) => {
      this.process = spawn('node', ['test.js']) //TEMPORARY
      this.process.once('spawn', () => {
        console.log('The server has successfully started!')
        resolve()
      })
    })
  }

  /**
   * Restart the server process
   */
  public async restart(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.process) throw 'No server is currently running!'
      this.stop()
      this.start().then(() => resolve())
    })
  }

  /**
   * Stop the server process
   */
  public stop(): void {
    if (!this.process) throw 'No server is currently running!'
    this.process.kill()
  }

  /**
   * Assign actions to events that take place on the server
   */
  public on(event: 'stdout' | 'stderr', callback: (data: string) => void): void {
    if (!this.process) throw 'No server is currently running!'
    this.process[event]?.on('data', (data: Buffer) => callback(data.toString()))
  }

  /**
   * Read a given `ini` file for server options
   */
  private getOptionsFromFile(path: string): ServerOptions {
    // Get file from path
    const file = fs.readFileSync(path, { encoding: 'utf-8' })
    const rawOptions = ini.parse(file)

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
      playlist: new Gamemode(rawOptions.playlist)
    }
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
    return true
  }
}
