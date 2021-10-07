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
