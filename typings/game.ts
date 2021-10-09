// Gamemode typings
export type GamemodeName =
  | 'Deathmatch'
  | 'Team deathmatch'
  | 'Capture the flag'
  | 'Kill confirmed'
  | 'King of the hill'
  | 'Last team standing'
  | 'Last man standing'
  | 'Search and destroy'

export type GamemodeId = 'DM' | 'TDM' | 'CTF' | 'KC' | 'KOTH' | 'LTS' | 'LMS' | 'SAD'

export type Gamemodes = {
  [k in GamemodeId]: GamemodeName
}

// Map typings
export type MapName =
  | 'Lobby'
  | 'Helodeck'
  | 'Heavy Metal'
  | 'Safehold'
  | 'Decay'
  | 'SeaPort'
  | 'Piledriver'
  | 'Vortex'
  | 'Vertigo'
  | 'Crashsite'
  | 'Convoy'
  | 'Outpost'
  | 'Containment'
  | 'Trench'
  | 'Deadlock'
  | 'Evac'
  | 'Metro'
  | 'Rig'
  | 'Death Metal'

export type MapFileName =
  | 'FoxEntry'
  | 'helodeck'
  | 'heavymetal'
  | 'safehold'
  | 'decay'
  | 'seaport'
  | 'piledriver1'
  | 'vortex'
  | 'vertigo'
  | 'crashsite'
  | 'convoy'
  | 'outpost'
  | 'containment'
  | 'trench'
  | 'deadlock'
  | 'evac'
  | 'metro'
  | 'rig'
  | 'deathmetal'

export type Maps = {
  [k in MapFileName]: MapName
}
