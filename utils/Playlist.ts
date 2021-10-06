export default class Playlist {
    public playlistName: PlaylistName
    public playlistId: PlaylistId

    constructor(identifier: PlaylistName | PlaylistId) {
        if (Playlist.isOfTypePlaylistName(identifier)) {
            // identifier is a PlaylistName
            this.playlistName = identifier
            this.playlistId = Playlist.nameToId(identifier)
        } else if (Playlist.isOfTypePlaylistId(identifier)) {
            // identifier is a PlaylistId
            this.playlistName = Playlist.IdToName(identifier)
            this.playlistId = identifier
        } else {
            // identifier is neither a PlaylistName nor PlaylistId
            throw `${identifier} is not a valid playlist!`
        }
    }

    /**
     * Get an object where the keys are playlist IDs and values are corresponding display names
     */
    public static get playlists(): Playlists {
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
     * Get an array containing all playlist display names
     */
    public static get playlistNames(): PlaylistName[] {
        return Object.values(Playlist.playlists)
    }

    /**
     * Get an array containing all playlist IDs
     */
    public static get playlistIds(): PlaylistId[] {
        return Object.keys(Playlist.playlists) as PlaylistId[] // Object.keys returns string[]
    }

    /**
     * Check if a string is of type `PlaylistName`
     */
    public static isOfTypePlaylistName(input: string): input is PlaylistName {
        return Playlist.playlistNames.some(name => name === input)
    }

    /**
     * Check if a string is of type `PlaylistId`
     */
    public static isOfTypePlaylistId(input: string): input is PlaylistId {
        return Playlist.playlistIds.some(name => name === input)
    }

    /**
     * Convert a playlist ID to its display name
     */
    public static IdToName(playlistId: PlaylistId): PlaylistName {
        return Playlist.playlists[playlistId]
    }

    /**
     * Convert a playlist display name to its ID
     */
    public static nameToId(playlistName: PlaylistName): PlaylistId {
        return Playlist.playlistIds[Playlist.playlistNames.findIndex(name => name === playlistName)]
    }
}