import fs from 'fs'
import ini from 'ini'
import Map from './Map'
import Gamemode from './Gamemode'
import {ServerOptions} from '../types/servers'

export default class Server {
    public options: ServerOptions

    constructor() {
        this.options = this.getOptionsFromFile('config.ini')
    }

    /**
     * Read a given `ini` file for server options
     */
    private getOptionsFromFile(path: string): ServerOptions {
        let file = fs.readFileSync(path, {encoding: 'utf-8'})
        let rawOptions = ini.parse(file)

        if (typeof rawOptions.bots !== 'number') throw `${rawOptions.bots} is not a valid number of bots!`
        if (typeof rawOptions.timeLimit !== 'number') throw `${rawOptions.timeLimit} is not a valid time limit!`
        if (typeof rawOptions.autoRestart !== 'boolean') throw `${rawOptions.autoRestart} is not a boolean!`
        if (typeof rawOptions.startingCP !== 'number') throw `${rawOptions.startingCP} is not a valid amount of starting CP!`

        let options: Partial<ServerOptions> = {}

        options.map = new Map(rawOptions.map)
        options.gamemode = new Gamemode(rawOptions.gamemode)
        options.playlist = new Gamemode(rawOptions.playlist)
        options.bots = rawOptions.bots
        options.timeLimit = rawOptions.timeLimit
        options.autoRestart = rawOptions.autoRestart
        options.startingCP = rawOptions.startingCP

        return options as ServerOptions
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
}