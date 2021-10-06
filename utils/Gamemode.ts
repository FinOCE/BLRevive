export default class Gamemode {
  public gamemodeName: GamemodeName
  public gamemodeId: GamemodeId

  constructor(identifier: GamemodeName | GamemodeId) {
    if (Gamemode.isOfTypeGamemodeName(identifier)) {
      // identifier is a GamemodeName
      this.gamemodeName = identifier
      this.gamemodeId = Gamemode.nameToId(identifier)
    } else if (Gamemode.isOfTypeGamemodeId(identifier)) {
      // identifier is a GamemodeId
      this.gamemodeName = Gamemode.IdToName(identifier)
      this.gamemodeId = identifier
    } else {
      // identifier is neither a GamemodeName nor GamemodeId
      throw `${identifier} is not a valid gamemode!`
    }
  }

  /**
   * Get an object where the keys are gamemode IDs and values are corresponding display names
   */
  public static get gamemodes(): Gamemodes {
    return {
      DM: 'Deathmatch',
      TDM: 'Team deathmatch',
      CTF: 'Capture the flag',
      KC: 'Kill confirmed',
      KOTH: 'King of the hill',
      LTS: 'Last team standing',
      LMS: 'Last man standing',
      SAD: 'Search and destroy'
    }
  }

  /**
   * Get an array containing all gamemode display names
   */
  public static get gamemodeNames(): GamemodeName[] {
    return Object.values(Gamemode.gamemodes)
  }

  /**
   * Get an array containing all gamemode IDs
   */
  public static get gamemodeIds(): GamemodeId[] {
    return Object.keys(Gamemode.gamemodes) as GamemodeId[] // Object.keys returns string[]
  }

  /**
   * Check if a string is of type `GamemodeName`
   */
  public static isOfTypeGamemodeName(input: string): input is GamemodeName {
    return Gamemode.gamemodeNames.some((name) => name === input)
  }

  /**
   * Check if a string is of type `GamemodeId`
   */
  public static isOfTypeGamemodeId(input: string): input is GamemodeId {
    return Gamemode.gamemodeIds.some((name) => name === input)
  }

  /**
   * Convert a gamemode ID to its display name
   */
  public static IdToName(gamemodeId: GamemodeId): GamemodeName {
    return Gamemode.gamemodes[gamemodeId]
  }

  /**
   * Convert a gamemode display name to its ID
   */
  public static nameToId(gamemodeName: GamemodeName): GamemodeId {
    return Gamemode.gamemodeIds[
      Gamemode.gamemodeNames.findIndex((name) => name === gamemodeName)
    ]
  }
}
