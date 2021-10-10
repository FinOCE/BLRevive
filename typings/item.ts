export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Unobtainable'

export type Price = {
  gp: [number, number] // First number is 1 day, second is permanent
  zen: [number, number]
}

export type PrimaryReceiver =
  | 'AK470 Rifle'
  | 'Anti-Materiel Rifle'
  | 'Assault Rifle'
  | 'Bolt-Action Rifle'
  | 'Bullpup Full Auto'
  | 'Burstfire Rifle'
  | 'Burstfire SMG'
  | 'Combat Rifle'
  | 'Compound Bow'
  | 'Light Machine Gun'
  | 'Light Recon Rifle'
  | 'LMG Recon'
  | 'M4X Rifle'
  | 'Submachine Gun'
  | 'Tactical Assault Rifle'
  | 'Tactical SMG'

export type SecondaryReceiver =
  | 'Breech Loaded Pistol'
  | 'Burstfire Pistol'
  | 'Heavy Pistol'
  | 'Light Pistol'
  | 'Machine Pistol'
  | 'Revolver'
  | 'Shotgun'
  | 'Shotgun AR-k'
  | 'Snub 260'
