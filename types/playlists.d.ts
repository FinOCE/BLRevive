type PlaylistName
    = 'Deathmatch'
    | 'Team deathmatch'
    | 'Capture the flag'
    | 'Kill confirmed'
    | 'King of the hill'
    | 'Last team standing'
    | 'Last man standing'
    | 'Search and destroy'

type PlaylistId
    = 'DM'
    | 'TDM'
    | 'CTF'
    | 'KC'
    | 'KOTH'
    | 'LTS'
    | 'LMS'
    | 'SAD'

type Playlists = {
    [k in PlaylistId]: PlaylistName
}