type GamemodeName
    = 'Deathmatch'
    | 'Team deathmatch'
    | 'Capture the flag'
    | 'Kill confirmed'
    | 'King of the hill'
    | 'Last team standing'
    | 'Last man standing'
    | 'Search and destroy'

type GamemodeId
    = 'DM'
    | 'TDM'
    | 'CTF'
    | 'KC'
    | 'KOTH'
    | 'LTS'
    | 'LMS'
    | 'SAD'

type Gamemodes = {
    [k in GamemodeId]: GamemodeName
}