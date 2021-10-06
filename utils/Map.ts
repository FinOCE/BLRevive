export default class Map {
    public mapName: MapName
    public mapFileName: MapFileName

    constructor(identifier: MapName | MapFileName) {
        if (Map.isOfTypeMapName(identifier)) {
            // identifier is a MapName
            this.mapName = identifier
            this.mapFileName = Map.nameToFile(identifier)
        } else if (Map.isOfTypeMapFileName(identifier)) {
            // identifier is a MapFileName
            this.mapName = Map.fileToName(identifier)
            this.mapFileName = identifier
        } else {
            // identifier is neither a MapName nor MapFileName
            throw `${identifier} is not a valid map!`
        }
    }

    /**
     * Get an object where the keys are map file names and values are corresponding display names
     */
    public static get maps(): Maps {
        return {
            FoxEntry: 'Lobby',
            helodeck: 'Helodeck',
            heavymetal: 'Heavy Metal',
            safehold: 'Safehold',
            decay: 'Decay',
            seaport: 'SeaPort',
            piledriver1: 'Piledriver',
            vortex: 'Vortex',
            vertigo: 'Vertigo',
            crashsite: 'Crashsite',
            convoy: 'Convoy',
            outpost: 'Outpost',
            containment: 'Containment',
            trench: 'Trench',
            deadlock: 'Deadlock',
            evac: 'Evac',
            metro: 'Metro',
            rig: 'Rig',
            deathmetal: 'Death Metal'
        }
    }

    /**
     * Get an array containing all map display names
     */
    public static get mapNames(): MapName[] {
        return Object.values(Map.maps)
    }

    /**
     * Get an array containing all map file names
     */
    public static get mapFileNames(): MapFileName[] {
        return Object.keys(Map.maps) as MapFileName[] // Object.keys returns string[]
    }

    /**
     * Check if a string is of type `MapName`
     */
    public static isOfTypeMapName(input: string): input is MapName {
        return Map.mapNames.some(name => name === input)
    }

    /**
     * Check if a string is of type `MapFileName`
     */
     public static isOfTypeMapFileName(input: string): input is MapFileName {
        return Map.mapFileNames.some(name => name === input)
    }

    /**
     * Convert a map display name to its file name
     */
    public static fileToName(mapFileName: MapFileName): MapName {
        return Map.maps[mapFileName]
    }

    /**
     * Convert a map file name to its display name
     */
    public static nameToFile(mapName: MapName): MapFileName {
        return Map.mapFileNames[Map.mapNames.findIndex(name => name === mapName)]
    }
}