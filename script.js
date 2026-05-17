const primaries = [
  ["AK-12", 0, "Assault Rifle"], ["VZ.806", 0, "Assault Rifle"], ["AN-94", 10, "Assault Rifle"],
  ["AS VAL", 15, "Assault Rifle"], ["MK16 SOCOM", 16, "Assault Rifle"], ["UAR A1", 20, "Assault Rifle"],
  ["M16A4", 22, "Assault Rifle"], ["STG-91", 25, "Assault Rifle"], ["M16A1", 28, "Assault Rifle"],
  ["M16A3", 31, "Assault Rifle"], ["TYPE 20", 35, "Assault Rifle"], ["F90 MBR", 39, "Assault Rifle"],
  ["K2", 42, "Assault Rifle"], ["FAMAS G2", 45, "Assault Rifle"], ["AK-47", 47, "Assault Rifle"],
  ["L85A2", 55, "Assault Rifle"], ["STG-527", 64, "Assault Rifle"], ["AK-74", 74, "Assault Rifle"],
  ["FAMAS F1", 83, "Assault Rifle"], ["QBZ-95", 90, "Assault Rifle"], ["AKM", 94, "Assault Rifle"],
  ["QBZ-97A", 97, "Assault Rifle"], ["AK-103", 103, "Assault Rifle"], ["TAR-21", 111, "Assault Rifle"],
  ["TYPE 88", 122, "Assault Rifle"], ["M231", 123, "Assault Rifle"], ["C7A2", 128, "Assault Rifle"],
  ["AK-12M", 134, "Assault Rifle"], ["MAC-15", 141, "Assault Rifle"], ["STG-44", 144, "Assault Rifle"],
  ["IA2 AR", 148, "Assault Rifle"], ["VZ.808", 153, "Assault Rifle"], ["L85A3", 158, "Assault Rifle"],
  ["AK-15", 163, "Assault Rifle"], ["VHS-D2", 172, "Assault Rifle"], ["AK-19", 178, "Assault Rifle"],
  ["M38A5", 183, "Assault Rifle"], ["XM-ACR", 202, "Assault Rifle"], ["GERAT 90", 211, "Assault Rifle"],

  ["SMX-9K", 0, "PDW"], ["PDX-45", 5, "PDW"], ["STG-91C", 7, "PDW"], ["X46A2", 9, "PDW"],
  ["MAC-10", 23, "PDW"], ["P90", 24, "PDW"], ["MP-9", 29, "PDW"], ["MK16 SOCOM CQB", 32, "PDW"],
  ["XM-MARS", 36, "PDW"], ["SMX-9", 40, "PDW"], ["SMG 633", 49, "PDW"], ["L2A3", 53, "PDW"],
  ["SMX-9SD", 60, "PDW"], ["HONEY BADGER", 62, "PDW"], ["SMX-10", 66, "PDW"], ["M3A1", 71, "PDW"],
  ["SMX-9/10", 74, "PDW"], ["UZI", 77, "PDW"], ["UAR A3 PARA", 80, "PDW"], ["K7", 84, "PDW"],
  ["AKS-74U", 88, "PDW"], ["PPSH-41", 92, "PDW"], ["FAL PARA SHORTY", 96, "PDW"], ["VECTOR 45", 100, "PDW"],
  ["PP-19 BIZON", 105, "PDW"], ["MP40", 108, "PDW"], ["X95 SMG", 115, "PDW"], ["TOMMY GUN", 121, "PDW"],
  ["RAMA 1130", 126, "PDW"], ["MAC-31", 131, "PDW"], ["IA2 SMG", 139, "PDW"], ["BWC9 A", 149, "PDW"],
  ["FIVE-0", 155, "PDW"], ["LUTY", 159, "PDW"], ["STG-527C", 164, "PDW"], ["FAMAS COMMANDO", 194, "PDW"],

  ["LSV M/04", 0, "LMG"], ["M249 SAW", 0, "LMG"], ["M60E6", 19, "LMG"], ["UAR HBAR", 27, "LMG"],
  ["MG91", 33, "LMG"], ["RPK-12", 37, "LMG"], ["L86A2 LSW", 43, "LMG"], ["AK-12BR", 44, "LMG"],
  ["RPK", 54, "LMG"], ["MG80", 67, "LMG"], ["HAMR IAR", 72, "LMG"], ["RPK-74", 88, "LMG"],
  ["QJB-95 LSW", 95, "LMG"], ["MG3KWS", 101, "LMG"], ["FALO 50.41", 109, "LMG"], ["M1918A2", 118, "LMG"],
  ["M27 IAR", 127, "LMG"], ["RPK-16", 151, "LMG"], ["MGV-176", 176, "LMG"], ["STONER 96", 196, "LMG"],
  ["ChainSAW", 226, "LMG"], ["MG42", 242, "LMG"], ["KORD-R", 362, "LMG"],

  ["INTERVENTION", 0, "Sniper Rifle"], ["MODEL 700", 12, "Sniper Rifle"], ["CS/LR-3", 26, "Sniper Rifle"],
  ["AWS", 41, "Sniper Rifle"], ["BFG 50", 65, "Sniper Rifle"], ["AWM", 82, "Sniper Rifle"],
  ["TRG-42", 84, "Sniper Rifle"], ["MOSIN NAGANT", 91, "Sniper Rifle"], ["DRAGUNOV SVDS", 104, "Sniper Rifle"],
  ["M110A1 CSASS", 110, "Sniper Rifle"], ["CS/LR-4A", 117, "Sniper Rifle"], ["THE FIX", 124, "Sniper Rifle"],
  ["M1903", 136, "Sniper Rifle"], ["K14", 138, "Sniper Rifle"], ["HECATE II", 150, "Sniper Rifle"],
  ["FT300", 160, "Sniper Rifle"], ["M82A1", 170, "Sniper Rifle"], ["BALLISTA", 180, "Sniper Rifle"],
  ["SCOUT RIFLE", 195, "Sniper Rifle"], ["WA2000", 200, "Sniper Rifle"], ["NTW-20", 220, "Sniper Rifle"],
  ["DSR-50", 230, "Sniper Rifle"], ["VKS", 250, "Sniper Rifle"],

  ["M4A1", 0, "Carbine"], ["STG-91K", 6, "Carbine"], ["M4", 14, "Carbine"], ["L22A2", 28, "Carbine"],
  ["AK-12U", 35, "Carbine"], ["GROZA-1", 42, "Carbine"], ["OTS-126", 48, "Carbine"], ["AK-9", 51, "Carbine"],
  ["UAR A3", 52, "Carbine"], ["PDC-45", 58, "Carbine"], ["K1A", 63, "Carbine"], ["SR-3M", 69, "Carbine"],
  ["MK16 SOCOM SC", 75, "Carbine"], ["GROZA-4", 79, "Carbine"], ["STG-89C", 86, "Carbine"],
  ["1858 CARBINE", 93, "Carbine"], ["SA58 OSW", 98, "Carbine"], ["AK-105", 105, "Carbine"],
  ["JURY", 114, "Carbine"], ["R SQUARED", 125, "Carbine"], ["GYROJET CARBINE", 127, "Carbine"],
  ["C8A2", 128, "Carbine"], ["X95R", 130, "Carbine"], ["SALTY WEASEL", 137, "Carbine"],
  ["STG-448", 147, "Carbine"], ["MG89B", 160, "Carbine"], ["MINI FIX", 175, "Carbine"],
  ["EF88", 188, "Carbine"], ["CAN CANNON", 222, "Carbine"], ["MTS-569", 269, "Carbine"],

  ["QBU-88", 0, "DMR"], ["MK11", 3, "DMR"], ["SKS", 13, "DMR"], ["VG-98", 34, "DMR"],
  ["DRAGUNOV SVU", 38, "DMR"], ["VSS VINTOREZ", 46, "DMR"], ["JG-90", 59, "DMR"], ["M21", 68, "DMR"],
  ["BELERON TCR", 70, "DMR"], ["SA58 SPR", 78, "DMR"], ["MK20 SSR", 85, "DMR"], ["SAIGA SAR", 106, "DMR"],
  ["SVK-12", 116, "DMR"], ["VZ.806 PPS", 135, "DMR"], ["UAR A3M2", 156, "DMR"], ["M28 GDMR", 182, "DMR"],

  ["M14", 2, "Battle Rifle"], ["BELERON ECR", 21, "Battle Rifle"], ["MK17 SOCOM", 30, "Battle Rifle"],
  ["STG-59H", 59, "Battle Rifle"], ["GUSTAV 66", 76, "Battle Rifle"], ["STG-528", 78, "Battle Rifle"],
  ["FAL 50.63 PARA", 89, "Battle Rifle"], ["HENRY 45-70", 96, "Battle Rifle"], ["FAL 50.00", 107, "Battle Rifle"],
  ["VZ.806 BR", 129, "Battle Rifle"], ["AK-308", 142, "Battle Rifle"], ["IA2 BR", 154, "Battle Rifle"],
  ["M7 NGSW", 165, "Battle Rifle"], ["HCAR", 181, "Battle Rifle"], ["DOOMBOX", 193, "Battle Rifle"],
  ["SHAK-12", 212, "Battle Rifle"], ["MK17 ULTRALIGHT", 218, "Battle Rifle"],

  ["KSG 12", 1, "Shotgun"], ["MODEL 870", 11, "Shotgun"], ["AK-12/76", 24, "Shotgun"],
  ["M37 12G", 37, "Shotgun"], ["TERMINATOR 12G", 50, "Shotgun"], ["KS-23M", 56, "Shotgun"],
  ["SAIGA-12", 63, "Shotgun"], ["STEVENS DB", 81, "Shotgun"], ["E-GUN", 87, "Shotgun"],
  ["SCX-12", 99, "Shotgun"], ["AA-12", 112, "Shotgun"], ["SPAS-12", 120, "Shotgun"],
  ["DT11", 133, "Shotgun"], ["USAS-12", 189, "Shotgun"]
].map(toWeapon);

const secondaries = [
  ["M9", 0, "Pistol"], ["G17", 0, "Pistol"], ["M1911A1", 8, "Pistol"], ["M17", 13, "Pistol"],
  ["RAVEN L5", 18, "Pistol"], ["G21", 21, "Pistol"], ["G23", 23, "Pistol"], ["M45A1", 34, "Pistol"],
  ["G40", 40, "Pistol"], ["G50", 50, "Pistol"], ["KG-99", 50, "Pistol"], ["FIVE SEVEN", 57, "Pistol"],
  ["ZIP 22", 61, "Pistol"], ["GI M1", 73, "Pistol"], ["HARDBALLER", 84, "Pistol"], ["IZHEVSK PB", 91, "Pistol"],
  ["MAKAROV PM", 92, "Pistol"], ["GB-22", 99, "Pistol"], ["RAVEN XIX", 102, "Pistol"], ["AUTOMAG III", 109, "Pistol"],
  ["GSH-18", 119, "Pistol"], ["GYROJET MARK I", 122, "Pistol"], ["GSP", 131, "Pistol"], ["GRIZZLY", 144, "Pistol"],
  ["M2011", 150, "Pistol"], ["U-527/22", 152, "Pistol"], ["ALIEN", 179, "Pistol"], ["AF2011-A1", 201, "Pistol"],
  ["BOXY BUSTER", Number.POSITIVE_INFINITY, "Pistol", "Roblox x Nerf exclusive"],

  ["MAC-11", 0, "Machine Pistol"], ["G18C", 17, "Machine Pistol"], ["93R", 26, "Machine Pistol"],
  ["PP-2000", 42, "Machine Pistol"], ["TEC-9", 50, "Machine Pistol"], ["MICRO UZI", 68, "Machine Pistol"],
  ["SKORPION VZ. 61", 84, "Machine Pistol"], ["ASMI", 97, "Machine Pistol"], ["MP1911", 106, "Machine Pistol"],
  ["ARM PISTOL", 110, "Machine Pistol"],

  ["MP412 REX", 4, "Revolver"], ["MATEBA 6", 29, "Revolver"], ["1858 NEW ARMY", 58, "Revolver"],
  ["RH-44", 82, "Revolver"], ["JUDGE", 113, "Revolver"], ["EXECUTIONER", 137, "Revolver"], ["RSH-12", 221, "Revolver"],

  ["SUPER SHORTY", 36, "Other"], ["STAKEOUT", 67, "Other"], ["SFG 50", 75, "Other"], ["M79 THUMPER", 79, "Other"],
  ["COILGUN", 87, "Other"], ["SAWED OFF", 90, "Other"], ["SAIGA-12U", 95, "Other"], ["OBREZ", 117, "Other"],
  ["SASS 308", 132, "Other"], ["THUNDER", 190, "Other"]
].map(toWeapon);

const grenades = [
  ["M67 FRAG", 0, "Fragmentation"], ["MK 2 FRAG", 2, "Fragmentation"], ["M24 STICK", 24, "Fragmentation"],
  ["M26 FRAG", 26, "Fragmentation"], ["M560 MINI", 56, "Fragmentation"], ["V40 MINI", 140, "Fragmentation"],
  ["ROLY HG", 300, "Fragmentation"],

  ["DYNAMITE", 0, "High Explosive"], ["DYNAMITE-3", 0, "High Explosive"], ["RGD-5 HE", 54, "High Explosive"],
  ["SEMTEX", 69, "High Explosive"], ["PB GRENADE", 135, "High Explosive"], ["BUNDLE CHARGE", 168, "High Explosive"],

  ["T-13 IMPACT", 80, "Impact"], ["RGN UDZS", 80, "Impact"], ["RGO UDZS", 114, "Impact"]
].map(toWeapon);

const attachmentSlots = ["Optic", "Barrel", "Underbarrel", "Other", "Ammo"];
const attachments = [
  ["Optic", "No attachment", 0],
  ["Optic", "Carry Handle Sight", 0, { exclusive: ["M16A4", "M16A1", "M16A3", "M4A1", "M4", "C7A2", "C8A2"] }],
  ["Optic", "Lyman Sight", 1050], ["Optic", "Acro P-1", 390],
  ["Optic", "Z-Point", 10], ["Optic", "EOTech XPS2", 45], ["Optic", "Full Ring Sight", 50],
  ["Optic", "Delta Sight", 70], ["Optic", "EOTech 552", 85], ["Optic", "Half Ring Sight", 90],
  ["Optic", "Mini Sight", 120], ["Optic", "Comp Aimpoint", 130], ["Optic", "Reflex Sight", 285],
  ["Optic", "Kobra Sight", 330], ["Optic", "BUIS Sight", 480], ["Optic", "IWI Sight", 1015],
  ["Optic", "Quick-Release Sight", 1105], ["Optic", "AAC Flip Up Sight", 1275], ["Optic", "DCL 120", 1320],
  ["Optic", "Dual Aperture Sight", 1400], ["Optic", "AMT-Terminator", 2029], ["Optic", "Handmade Sight", 3000],
  ["Optic", "Animu Sight", 4500], ["Optic", "Furro Sight", 5000], ["Optic", "Hand Sight", 5250],
  ["Optic", "Anti Sight", 5600], ["Optic", "Hensoldt 3x Sight", 0, { exclusivePrefix: ["STG-91", "STG-91C", "STG-91K", "STG-59H"] }],
  ["Optic", "Anti-Aircraft Irons", 0, { exclusive: ["M60E6", "MG3KWS"] }],
  ["Optic", "Reflector Scope", 2700],
  ["Optic", "Malcolm 3x Scope", 215], ["Optic", "H&K Sight", 20], ["Optic", "MARS", 70],
  ["Optic", "Backup Sight", 100], ["Optic", "Leupold M8-2x", 100, { categories: ["Sniper Rifle", "Revolver", "Carbine"] }],
  ["Optic", "PK-A", 165], ["Optic", "Steyr Sight", 210], ["Optic", "PKA-S", 225],
  ["Optic", "Double Open Sight", 250], ["Optic", "Izhmash Sight", 315], ["Optic", "Super Slim Sight", 350],
  ["Optic", "Coyote Sight", 380], ["Optic", "Diopter Sight", 410], ["Optic", "Pilad 3", 500],
  ["Optic", "Kel-Tec Sight", 540], ["Optic", "Kalashnikov Sight", 570], ["Optic", "KAC Sight", 600],
  ["Optic", "1200M Sight", 700], ["Optic", "Barska Electro", 750], ["Optic", "H&K Export Sight", 780],
  ["Optic", "Bundeswehr Sight", 870], ["Optic", "OKP-7", 900], ["Optic", "DDHB Reflex", 1200],
  ["Optic", "PU-1 Scope", 2000, { categories: ["Sniper Rifle", "DMR"] }],
  ["Optic", "PM II", 5000, { categories: ["Sniper Rifle"] }],
  ["Optic", "Remington Irons", 0, { exclusive: ["MODEL 700"] }],
  ["Optic", "PSO-1 Scope", 250], ["Optic", "C79", 125], ["Optic", "M145", 185],
  ["Optic", "ACOG Scope", 430], ["Optic", "VCOG 6x Scope", 455], ["Optic", "TA33 ACOG", 650],
  ["Optic", "MBUS Sight", 1150], ["Optic", "Swarovski Scope", 1355], ["Optic", "Leupold M8-6x", 1500],
  ["Optic", "TA11 ACOG", 1750], ["Optic", "PSO-1M2 Scope", 2250], ["Optic", "TA01 ACOG", 2500],
  ["Optic", "VCOG 8x Scope", 3455], ["Optic", "Global Offensive Scope", 5000],
  ["Optic", "Sidewinder ED", 5000], ["Optic", "Hi-Power 8-32", 5000], ["Optic", "Klassik LM", 5000],
  ["Optic", "NXS 8-32", 5000], ["Optic", "NXS 5.5-22", 5000], ["Optic", "Leupold Mark 4", 5000],
  ["Optic", "Electra 5x", 5000], ["Optic", "PRO 3-9X Scope", 5000], ["Optic", "CS/OS15", 5000],
  ["Optic", "Sagittarius 40x Scope", 6000], ["Optic", "FF 3X NV", 10000],

  ["Barrel", "No attachment", 0],
  ["Barrel", "Remove Suppressor", 0, { exclusive: ["HONEY BADGER"] }],
  ["Barrel", "Suppressor", 30], ["Barrel", "R2 Suppressor", 40], ["Barrel", "Flash Hider", 100],
  ["Barrel", "ARS Suppressor", 150], ["Barrel", "PBS-1 Suppressor", 205], ["Barrel", "PBS-4 Suppressor", 245],
  ["Barrel", "Osprey Suppressor", 250], ["Barrel", "Oil Filter", 500], ["Barrel", "Sionics Suppressor", 2500, { exclusive: ["MAC-10"] }],
  ["Barrel", "Muffler", 600], ["Barrel", "Compensator", 120],
  ["Barrel", "Muzzle Brake", 175], ["Barrel", "Halbek Device", 765], ["Barrel", "Loudener", 835],
  ["Barrel", "Muzzle Booster", 1200], ["Barrel", "T-Brake", 850], ["Barrel", "X-Ring", 900],
  ["Barrel", "CTAR Barrel", 0, { exclusive: ["TAR-21"] }],
  ["Barrel", "Short Barrel", 465, { categories: ["Assault Rifle", "LMG", "Shotgun", "DMR", "Sniper Rifle"] }],
  ["Barrel", "Long Barrel", 930, { categories: ["Pistol", "Assault Rifle", "LMG", "Shotgun", "DMR", "Sniper Rifle"] }],
  ["Barrel", "Extended Barrel", 1000], ["Barrel", "Taurus Barrel", 1200, { exclusive: ["JUDGE", "EXECUTIONER"] }],

  ["Underbarrel", "No attachment", 0],
  ["Underbarrel", "Folded Grip", 0], ["Underbarrel", "Vertical Grip", 45], ["Underbarrel", "Potato Grip", 108],
  ["Underbarrel", "Angled Grip", 125], ["Underbarrel", "Skeleton Grip", 205], ["Underbarrel", "Folding Grip", 265],
  ["Underbarrel", "Stubby Grip", 355], ["Underbarrel", "Pistol Grip", 580], ["Underbarrel", "Romanian Grip", 630],
  ["Underbarrel", "Sideways Grip", 715], ["Underbarrel", "Hera CQC Grip", 870], ["Underbarrel", "Chainsaw Grip", 950],
  ["Underbarrel", "35 Round Box Mag", 950, { exclusive: ["HENRY 45-70"] }],
  ["Underbarrel", "Flashlight", 0], ["Underbarrel", "Laser", 75], ["Underbarrel", "Green Laser", 110],
  ["Underbarrel", "Blue Laser", 200], ["Underbarrel", "Yellow Laser", 270], ["Underbarrel", "Tri Laser", 1070],

  ["Other", "No attachment", 0],
  ["Other", "Flashlight", 0], ["Other", "Laser", 20], ["Other", "Green Laser", 110], ["Other", "Blue Laser", 200],
  ["Other", "Yellow Laser", 270],
  ["Other", "Tri Laser", 1015], ["Other", "Ballistics Tracker", 1500],
  ["Other", "Extended Stock", 0, { exclusive: ["UZI"] }],
  ["Other", "Extended Stock", 0, { exclusive: ["MICRO UZI"] }],
  ["Other", "Collapsible Stock", 0, { exclusive: ["AK-47", "AKM", "AK-74"] }],
  ["Other", "G Stock", 450, { exclusive: ["G17", "G18C"] }],
  ["Other", "Raffica Stock", 450, { exclusive: ["M9", "93R"] }],
  ["Other", "KAC Stock", 475, { exclusive: ["RH-44"] }],
  ["Other", "Retract Stock", 510], ["Other", "Remove Stock", 510], ["Other", "Full Stock", 595],
  ["Other", "Boom Stock", 1000, { exclusive: ["SAWED OFF"] }],
  ["Other", "Police Stock", 2000, { exclusive: ["RAVEN XIX"] }],
  ["Other", "Straight Pull Bolt", 2000, { categories: ["Sniper Rifle"] }],
  ["Other", "Taurus Stock", 2500, { exclusive: ["JUDGE", "EXECUTIONER"] }],
  ["Other", "Wire Stock", 3000, { exclusive: ["M231"] }],
  ["Other", "Canted Iron Sight", 310], ["Other", "Canted Delta Sight", 405],
  ["Other", "33rd Mag", 950, { exclusive: ["G17", "G18C"] }],
  ["Other", "Extended Magazine", 1000, { exclusive: ["AS VAL", "SR-3M"] }],
  ["Other", "30rd Mag", 1000, { exclusive: ["TOMMY GUN"] }],
  ["Other", "50rd Drum", 1000, { exclusive: ["TOMMY GUN"] }],
  ["Other", "20rd Drum", 1000, { exclusive: ["AA-12"] }],
  ["Other", "Pro Mag", 1337, { exclusive: ["ZIP 22"] }],
  ["Other", "Extended Tube", 1450, { exclusive: ["MODEL 870", "SUPER SHORTY"] }],
  ["Other", "Speed Loader", 2255, { categories: ["Revolver"] }],

  ["Ammo", "No attachment", 0],
  ["Ammo", "Armor Piercing", 1000, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Super Armor Piercing", 1500, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Hollow Point", 2000, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Tracerless", 750, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Special", 1750, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Silent", 2500, { excludeCategories: ["Shotgun"] }],
  ["Ammo", "Flechette", 500, { shotgunOnly: true }], ["Ammo", "Birdshot", 1000, { shotgunOnly: true }],
  ["Ammo", "Rubber Pellets", 1500, { shotgunOnly: true }], ["Ammo", "Slugs", 2000, { shotgunOnly: true }]
].map(toAttachment);

const primaryByClass = {
  Assault: ["Assault Rifle", "Battle Rifle", "Shotgun"],
  Scout: ["PDW", "Carbine", "Shotgun"],
  Support: ["LMG", "Battle Rifle", "Shotgun"],
  Recon: ["Sniper Rifle", "DMR", "Carbine", "Shotgun"]
};

const rankInput = document.querySelector("#rank");
const form = document.querySelector("#randomizer-form");
const includeLocked = document.querySelector("#include-locked");
const classMatch = document.querySelector("#class-match");
const includeAttachments = document.querySelector("#include-attachments");
const primaryKillsInput = document.querySelector("#primary-kills");
const secondaryKillsInput = document.querySelector("#secondary-kills");
const primaryName = document.querySelector("#primary-name");
const primaryMeta = document.querySelector("#primary-meta");
const secondaryName = document.querySelector("#secondary-name");
const secondaryMeta = document.querySelector("#secondary-meta");
const grenadeName = document.querySelector("#grenade-name");
const grenadeMeta = document.querySelector("#grenade-meta");
const primaryCount = document.querySelector("#primary-count");
const secondaryCount = document.querySelector("#secondary-count");
const grenadeCount = document.querySelector("#grenade-count");
const rankNote = document.querySelector("#rank-note");
const weaponPool = document.querySelector("#weapon-pool");
const copyButton = document.querySelector("#copy-loadout");
const attachmentsPanel = document.querySelector("#attachments-panel");
const attachmentsNote = document.querySelector("#attachments-note");
const primaryAttachments = document.querySelector("#primary-attachments");
const secondaryAttachments = document.querySelector("#secondary-attachments");
const randomizeWeaponsButton = document.querySelector("#randomize-weapons");
const randomizeAttachmentsButton = document.querySelector("#randomize-attachments");
const navButtons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");
const weaponSearch = document.querySelector("#weapon-search");
const weaponCategory = document.querySelector("#weapon-category");
const weaponBrowser = document.querySelector("#weapon-browser");
const selectedPrimary = document.querySelector("#selected-primary");
const selectedSecondary = document.querySelector("#selected-secondary");
const inspectorSlot = document.querySelector("#inspector-slot");
const inspectorTitle = document.querySelector("#inspector-title");
const inspectorMeta = document.querySelector("#inspector-meta");
const inspectorWiki = document.querySelector("#inspector-wiki");
const inspectorStats = document.querySelector("#inspector-stats");
const inspectorLiveStats = document.querySelector("#inspector-live-stats");
const inspectorAttachments = document.querySelector("#inspector-attachments");
const useInspectedWeaponButton = document.querySelector("#use-inspected-weapon");
const challengeType = document.querySelector("#challenge-type");
const challengeTitle = document.querySelector("#challenge-title");
const challengeText = document.querySelector("#challenge-text");
const randomChallengeButton = document.querySelector("#random-challenge");
const challengeFilters = document.querySelectorAll(".challenge-filter");
const challengeDeck = document.querySelector("#challenge-deck");
let activeChallengeCategory = "All";
let inspectedWeapon = { kind: "primary", weapon: primaries[0] };
let statsRequestId = 0;

let currentLoadout = {
  primary: primaries[0],
  secondary: secondaries[0],
  grenade: grenades[0],
  className: "",
  primaryAttachments: {},
  secondaryAttachments: {}
};

function toWeapon([name, rank, category, unlockLabel]) {
  return { name, rank, category, unlockLabel };
}

function toAttachment([slot, name, kills, rules = {}]) {
  return { slot, name, kills, ...rules };
}

function getRank() {
  return Math.max(0, Number.parseInt(rankInput.value, 10) || 0);
}

function getPrimaryKills() {
  return getKillsFromInput(primaryKillsInput);
}

function getSecondaryKills() {
  return getKillsFromInput(secondaryKillsInput);
}

function getKillsFromInput(input) {
  return Math.max(0, Number.parseInt(input.value.replace(/\D/g, ""), 10) || 0);
}

function getAvailable(list, rank) {
  if (includeLocked.checked) {
    return [...list];
  }

  return list.filter((weapon) => weapon.rank <= rank);
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomItemExcept(list, previous) {
  if (!previous || list.length < 2) {
    return randomItem(list);
  }

  let next = randomItem(list);

  while (next.name === previous.name) {
    next = randomItem(list);
  }

  return next;
}

function randomizeAttachmentSet(weapon, kills, previousSet = {}) {
  return attachmentSlots.reduce((set, slot) => {
    const pool = attachments.filter((attachment) => {
      return attachment.slot === slot && attachment.kills <= kills && isAttachmentEligible(attachment, weapon);
    });

    set[slot] = randomItemExcept(pool, previousSet[slot]);
    return set;
  }, {});
}

function isAttachmentEligible(attachment, weapon) {
  if (attachment.name === "No attachment") {
    return true;
  }

  const weaponName = normalize(weapon.name);
  const weaponCategory = weapon.category;

  if (attachment.exclusive && !attachment.exclusive.some((name) => normalize(name) === weaponName)) {
    return false;
  }

  if (attachment.exclusivePrefix && !attachment.exclusivePrefix.some((prefix) => weaponName.startsWith(normalize(prefix)))) {
    return false;
  }

  if (attachment.categories && !attachment.categories.includes(weaponCategory)) {
    return false;
  }

  if (attachment.excludeCategories && attachment.excludeCategories.includes(weaponCategory)) {
    return false;
  }

  if (attachment.shotgunOnly && !isShotgunWeapon(weapon)) {
    return false;
  }

  if (attachment.slot === "Underbarrel" && isSecondaryWeapon(weapon)) {
    return false;
  }

  if (attachment.slot === "Barrel" && isIntegralBarrelWeapon(weapon) && attachment.name !== "Remove Suppressor") {
    return false;
  }

  return true;
}

function isSecondaryWeapon(weapon) {
  return secondaries.some((secondary) => secondary.name === weapon.name);
}

function isShotgunWeapon(weapon) {
  return weapon.category === "Shotgun" || ["SUPER SHORTY", "SAWED OFF", "SAIGA-12U"].includes(normalize(weapon.name));
}

function isIntegralBarrelWeapon(weapon) {
  return ["AS VAL", "VSS VINTOREZ", "HONEY BADGER", "K7", "SMX-9SD", "AWS"].includes(normalize(weapon.name));
}

function normalize(value) {
  return value.toUpperCase().replace(/\s+/g, " ").trim();
}

function randomize(event) {
  event?.preventDefault();
  randomizeWeapons({ includeAttachmentRoll: includeAttachments.checked });
}

function randomizeWeaponsOnly() {
  randomizeWeapons({ includeAttachmentRoll: false });
}

function randomizeWeapons({ includeAttachmentRoll }) {
  const previousLoadout = currentLoadout;
  const rank = getRank();
  const secondaryPool = getAvailable(secondaries, rank);
  const grenadePool = getAvailable(grenades, rank);
  let primaryPool = getAvailable(primaries, rank);
  let className = "";

  if (classMatch.checked) {
    className = randomItem(Object.keys(primaryByClass));
    primaryPool = primaryPool.filter((weapon) => primaryByClass[className].includes(weapon.category));
  }

  currentLoadout = {
    primary: randomItemExcept(primaryPool, previousLoadout.primary),
    secondary: randomItemExcept(secondaryPool, previousLoadout.secondary),
    grenade: randomItemExcept(grenadePool, previousLoadout.grenade),
    className,
    primaryAttachments: {},
    secondaryAttachments: {}
  };

  if (includeAttachments.checked) {
    currentLoadout.primaryAttachments = includeAttachmentRoll
      ? randomizeAttachmentSet(currentLoadout.primary, getPrimaryKills(), previousLoadout.primaryAttachments)
      : previousLoadout.primaryAttachments;
    currentLoadout.secondaryAttachments = includeAttachmentRoll
      ? randomizeAttachmentSet(currentLoadout.secondary, getSecondaryKills(), previousLoadout.secondaryAttachments)
      : previousLoadout.secondaryAttachments;
  }

  render(rank);
}

function randomizeAttachmentsOnly() {
  if (includeAttachments.checked) {
    currentLoadout.primaryAttachments = randomizeAttachmentSet(currentLoadout.primary, getPrimaryKills(), currentLoadout.primaryAttachments);
    currentLoadout.secondaryAttachments = randomizeAttachmentSet(currentLoadout.secondary, getSecondaryKills(), currentLoadout.secondaryAttachments);
  } else {
    currentLoadout.primaryAttachments = {};
    currentLoadout.secondaryAttachments = {};
  }

  render();
}

function selectWeapon(kind, weaponName) {
  const list = kind === "primary" ? primaries : secondaries;
  const weapon = list.find((item) => item.name === weaponName);

  if (!weapon) {
    return;
  }

  currentLoadout[kind] = weapon;

  if (includeAttachments.checked) {
    currentLoadout[`${kind}Attachments`] = randomizeAttachmentSet(
      weapon,
      kind === "primary" ? getPrimaryKills() : getSecondaryKills(),
      currentLoadout[`${kind}Attachments`]
    );
  }

  render();
  showPage("randomizer");
}

function inspectWeapon(kind, weaponName) {
  const list = kind === "primary" ? primaries : secondaries;
  const weapon = list.find((item) => item.name === weaponName);

  if (!weapon) {
    return;
  }

  inspectedWeapon = { kind, weapon };
  renderInspector();
}

function render(rank = getRank()) {
  const primaryPool = getAvailable(primaries, rank);
  const secondaryPool = getAvailable(secondaries, rank);
  const grenadePool = getAvailable(grenades, rank);
  const visiblePool = [...primaryPool, ...secondaryPool, ...grenadePool].sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));

  primaryName.textContent = currentLoadout.primary.name;
  primaryMeta.textContent = metaText(currentLoadout.primary, currentLoadout.className);
  secondaryName.textContent = currentLoadout.secondary.name;
  secondaryMeta.textContent = metaText(currentLoadout.secondary);
  grenadeName.textContent = currentLoadout.grenade.name;
  grenadeMeta.textContent = metaText(currentLoadout.grenade);
  selectedPrimary.textContent = currentLoadout.primary.name;
  selectedSecondary.textContent = currentLoadout.secondary.name;
  renderAttachments();
  renderInspector();
  fitWeaponNames();

  primaryCount.textContent = primaryPool.length;
  secondaryCount.textContent = secondaryPool.length;
  grenadeCount.textContent = grenadePool.length;
  rankNote.textContent = includeLocked.checked ? "All ranks" : `Rank ${rank}`;

  weaponPool.innerHTML = visiblePool
    .map((weapon) => {
      const locked = weapon.rank > rank;
      return `
        <div class="pool-item${locked ? " locked" : ""}">
          <strong>${weapon.name}</strong>
          <span>${weapon.category} - ${unlockText(weapon)}${locked ? " locked" : ""}</span>
        </div>
      `;
    })
    .join("");
}

function metaText(weapon, className = "") {
  const classText = className ? `${className} class - ` : "";
  return `${classText}${weapon.category} - ${unlockText(weapon)}`;
}

function unlockText(weapon) {
  return weapon.unlockLabel || `Rank ${weapon.rank}`;
}

function renderAttachments() {
  attachmentsPanel.classList.toggle("is-disabled", !includeAttachments.checked);
  attachmentsNote.textContent = includeAttachments.checked
    ? `Primary ${getPrimaryKills()} kills / Secondary ${getSecondaryKills()} kills`
    : "Off";

  primaryAttachments.innerHTML = renderAttachmentRows(currentLoadout.primaryAttachments);
  secondaryAttachments.innerHTML = renderAttachmentRows(currentLoadout.secondaryAttachments);
}

function renderAttachmentRows(attachmentSet) {
  return attachmentSlots.map((slot) => {
    const attachment = attachmentSet[slot] || { name: "No attachment", kills: 0 };

    return `
      <div class="attachment-row">
        <span class="attachment-slot">${slot}</span>
        <span>
          <span class="attachment-name">${attachment.name}</span>
          <span class="attachment-unlock">${attachment.kills === 0 ? "0 kills" : `${attachment.kills} kills`}</span>
        </span>
      </div>
    `;
  }).join("");
}

function fitWeaponNames() {
  [primaryName, secondaryName, grenadeName].forEach((element) => {
    element.style.fontSize = "";

    while (element.scrollWidth > element.clientWidth && parseFloat(getComputedStyle(element).fontSize) > 22) {
      element.style.fontSize = `${parseFloat(getComputedStyle(element).fontSize) - 2}px`;
    }
  });
}

async function copyLoadout() {
  const text = [
    "Phantom Forces loadout",
    currentLoadout.className ? `Class: ${currentLoadout.className}` : null,
    `Primary: ${currentLoadout.primary.name} (${currentLoadout.primary.category}, ${unlockText(currentLoadout.primary).toLowerCase()})`,
    `Secondary: ${currentLoadout.secondary.name} (${currentLoadout.secondary.category}, ${unlockText(currentLoadout.secondary).toLowerCase()})`,
    `Grenade: ${currentLoadout.grenade.name} (${currentLoadout.grenade.category}, ${unlockText(currentLoadout.grenade).toLowerCase()})`,
    includeAttachments.checked ? attachmentCopyText("Primary attachments", currentLoadout.primaryAttachments) : null,
    includeAttachments.checked ? attachmentCopyText("Secondary attachments", currentLoadout.secondaryAttachments) : null
  ].filter(Boolean).join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Copy failed";
  }

  setTimeout(() => {
    copyButton.textContent = "Copy Loadout";
  }, 1200);
}

function attachmentCopyText(label, attachmentSet) {
  const lines = attachmentSlots.map((slot) => {
    const attachment = attachmentSet[slot] || { name: "No attachment" };
    return `${slot}: ${attachment.name}`;
  });

  return `${label}\n${lines.join("\n")}`;
}

function showPage(pageName) {
  pages.forEach((page) => {
    page.classList.toggle("is-hidden", !page.classList.contains(`page-${pageName}`));
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === pageName);
  });
}

function setupWeaponBrowser() {
  const categories = [...new Set([...primaries, ...secondaries].map((weapon) => weapon.category))].sort();

  weaponCategory.innerHTML = [
    `<option value="All">All categories</option>`,
    ...categories.map((category) => `<option value="${category}">${category}</option>`)
  ].join("");

  renderWeaponBrowser();
}

function renderWeaponBrowser() {
  const search = normalize(weaponSearch.value);
  const category = weaponCategory.value;
  const groups = [
    ["Primaries", primaries, "primary"],
    ["Secondaries", secondaries, "secondary"]
  ];

  weaponBrowser.innerHTML = groups.map(([title, list, kind]) => {
    const weapons = list.filter((weapon) => {
      const matchesSearch = !search || normalize(weapon.name).includes(search);
      const matchesCategory = category === "All" || weapon.category === category;
      return matchesSearch && matchesCategory;
    });

    if (!weapons.length) {
      return "";
    }

    return `
      <section class="weapon-category-group">
        <h3>${title}</h3>
        <div class="weapon-browser-grid">
          ${weapons.map((weapon) => `
            <article class="weapon-select-card">
              ${buildCompactRecoilPreview(weapon)}
              <strong>${weapon.name}</strong>
              <span>${weapon.category} - ${unlockText(weapon)}</span>
              <div class="weapon-card-actions">
                <button type="button" data-inspect-kind="${kind}" data-inspect-weapon="${weapon.name}">
                  Inspect
                </button>
                <button type="button" data-select-kind="${kind}" data-select-weapon="${weapon.name}">
                  Use
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderInspector() {
  const { kind, weapon } = inspectedWeapon;
  const kills = kind === "primary" ? getPrimaryKills() : getSecondaryKills();
  const classText = getWeaponClasses(weapon).join(", ") || "Any";

  inspectorSlot.textContent = kind === "primary" ? "Primary" : "Secondary";
  inspectorTitle.textContent = weapon.name;
  inspectorMeta.textContent = `${weapon.category} - ${unlockText(weapon)}`;
  inspectorWiki.href = wikiUrl(weapon.name, true);
  useInspectedWeaponButton.textContent = `Use as ${kind}`;
  inspectorStats.innerHTML = [
    ["Slot", kind === "primary" ? "Primary" : "Secondary"],
    ["Category", weapon.category],
    ["Unlock", unlockText(weapon)],
    ["Classes", classText],
    ["Kills checked", `${kills}`]
  ].map(([label, value]) => `
    <div class="stat-tile">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  inspectorAttachments.innerHTML = attachmentSlots.map((slot) => {
    const pool = attachments.filter((attachment) => {
      return attachment.slot === slot && attachment.kills <= kills && isAttachmentEligible(attachment, weapon);
    });
    const names = pool.map((attachment) => attachment.name).slice(0, 7).join(", ");
    const remaining = Math.max(0, pool.length - 7);

    return `
      <article class="attachment-preview">
        <strong>${slot} (${pool.length})</strong>
        <p>${names}${remaining ? `, +${remaining} more` : ""}</p>
      </article>
    `;
  }).join("");

  loadLiveWeaponStats(weapon);
}

function getWeaponClasses(weapon) {
  return Object.entries(primaryByClass)
    .filter(([, categories]) => categories.includes(weapon.category))
    .map(([className]) => className);
}

async function loadLiveWeaponStats(weapon) {
  const requestId = ++statsRequestId;
  inspectorLiveStats.innerHTML = `<div class="live-stat-message">Loading live wiki stats...</div>`;

  try {
    const [mainText, advancedText] = await Promise.all([
      fetchWikiText(weapon.name),
      fetchWikiText(`${weapon.name}/Advanced Stats`)
    ]);

    if (requestId !== statsRequestId) {
      return;
    }

    const stats = extractWeaponStats(mainText, advancedText);
    renderLiveStats(stats, weapon);
  } catch {
    if (requestId !== statsRequestId) {
      return;
    }

    inspectorLiveStats.innerHTML = `
      <div class="live-stat-message">
        Live stats could not be loaded here. Use the Wiki Stats button for damage, recoil, penetration, and advanced numbers.
      </div>
    `;
  }
}

async function fetchWikiText(pageTitle) {
  const url = `https://roblox-phantom-forces.fandom.com/api.php?action=parse&page=${encodeURIComponent(pageTitle)}&prop=text&format=json&origin=*`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Wiki request failed");
  }

  const data = await response.json();
  const html = data?.parse?.text?.["*"];

  if (!html) {
    throw new Error("Wiki page missing");
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent.replace(/\s+/g, " ").trim();
}

function extractWeaponStats(mainText, advancedText) {
  return [
    ["Damage", matchStat(mainText, /Damage\s+([0-9.]+(?:→|->|-)[0-9.]+)/i)],
    ["Range", matchStat(mainText, /Range\s+([0-9,]+(?:→|->|-)[0-9,]+(?:\s*studs)?)/i)],
    ["Fire Rate", matchStat(mainText, /Fire Rate\s+(.+?RPM(?:\s+[A-Z0-9 &|]+)?)(?:\s+The|\s+Contents|\s*$)/i)],
    ["Magazine", matchStat(mainText, /Magazine\s+(?:Reserve\s+)?([0-9]+\s*\+\s*[0-9]+|[0-9]+)/i)],
    ["Reserve", matchStat(mainText, /Reserve\s+([0-9]+)/i)],
    ["Ammo Type", matchStat(mainText, /Ammo Type\s+([A-Za-z0-9 .×x/-]+?)(?:\s+Fire Modes|\s+The|\s*$)/i)],
    ["Min TTK", matchStat(advancedText, /Minimum TTK .*?([0-9.]+\s*s)/i)],
    ["Muzzle Velocity", matchStat(advancedText, /Muzzle Velocity\s+([0-9,]+\s*studs\/s)/i) || matchStat(mainText, /Velocity\s+([0-9,]+\s*studs\/sec)/i)],
    ["Penetration", matchStat(advancedText, /Penetration Depth\s+([0-9.]+\s*studs)/i)],
    ["Suppression", matchStat(advancedText, /Suppression\s+([0-9.]+)/i)],
    ["Hip Accuracy", matchStat(advancedText, /HIP ACCURACY\s+([0-9.]+)/i)],
    ["Sight Accuracy", matchStat(advancedText, /SIGHT ACCURACY\s+([0-9.]+)/i)],
    ["Min Camera Kick", matchStat(advancedText, /Min Camera Kick\s+(\([^)]+\))/i)],
    ["Max Camera Kick", matchStat(advancedText, /Max Camera Kick\s+(\([^)]+\))/i)],
    ["Min Recoil Disp.", matchStat(advancedText, /Min Recoil Displacement\s+(\([^)]+\))/i)],
    ["Max Recoil Disp.", matchStat(advancedText, /Max Recoil Displacement\s+(\([^)]+\))/i)],
    ["Min Recoil Rot.", matchStat(advancedText, /Min Recoil Rotation\s+(\([^)]+\))/i)],
    ["Max Recoil Rot.", matchStat(advancedText, /Max Recoil Rotation\s+(\([^)]+\))/i)],
    ["Reload", matchStat(advancedText, /Reload Time\s+([0-9.]+\s*seconds)/i)],
    ["Empty Reload", matchStat(advancedText, /Empty Reload Time\s+([0-9.]+\s*seconds)/i)],
    ["Walk Speed", matchStat(advancedText, /Weapon Walk Speed\s+([0-9.]+\s*stud\/s)/i)],
    ["Aim Walk Speed", matchStat(advancedText, /Aiming Walk Speed\s+([0-9.]+\s*stud\/s)/i)]
  ].filter(([, value]) => value);
}

function matchStat(text, pattern) {
  const match = text.match(pattern);
  return match ? match[1].trim() : "";
}

function renderLiveStats(stats, weapon) {
  if (!stats.length) {
    inspectorLiveStats.innerHTML = `
      <div class="live-stat-message">
        No live stat table was found for this weapon. Open Wiki Stats for the full page.
      </div>
    `;
    return;
  }

  const recoilLabels = new Set([
    "Min Camera Kick",
    "Max Camera Kick",
    "Min Recoil Disp.",
    "Max Recoil Disp.",
    "Min Recoil Rot.",
    "Max Recoil Rot."
  ]);
  const recoilStats = stats.filter(([label]) => recoilLabels.has(label));
  const visibleStats = stats.filter(([label]) => !recoilLabels.has(label));
  const recoilVisual = buildRecoilVisual(recoilStats, weapon);

  inspectorLiveStats.innerHTML = `
    <div class="live-stat-heading">
      <h4>Live Weapon Stats</h4>
      <span>From Phantom Forces Wiki</span>
    </div>
    ${recoilVisual}
    <div class="live-stat-grid">
      ${visibleStats.map(([label, value]) => `
        <div class="live-stat-tile">
          <span>${label}</span>
          <strong title="${value}">${value}</strong>
        </div>
      `).join("")}
    </div>
  `;
  inspectorWiki.href = wikiUrl(weapon.name, true);
}

function buildRecoilVisual(recoilStats, weapon) {
  const values = Object.fromEntries(recoilStats);
  const minCamera = parseVector(values["Min Camera Kick"]);
  const maxCamera = parseVector(values["Max Camera Kick"]);
  const minRotation = parseVector(values["Min Recoil Rot."]);
  const maxRotation = parseVector(values["Max Recoil Rot."]);
  const minDisplacement = parseVector(values["Min Recoil Disp."]);
  const maxDisplacement = parseVector(values["Max Recoil Disp."]);

  if (!minCamera.length && !maxCamera.length && !minRotation.length && !maxRotation.length) {
    return `
      <div class="recoil-visual">
        <div class="live-stat-message">No recoil pattern values were found for this weapon.</div>
      </div>
    `;
  }

  const points = generateRecoilPoints(weapon, { minCamera, maxCamera, minRotation, maxRotation, minDisplacement, maxDisplacement }, 22, 320, 220);
  const pattern = recoilSvgPattern(points, 320, 220, false);

  return `
    <div class="recoil-visual">
      <div class="recoil-image" role="img" aria-label="${weapon.name} generated recoil pattern">
        ${pattern}
      </div>
      <div class="recoil-details">
        <h5>Generated recoil pattern</h5>
        <p>This image is generated from the wiki's camera kick, recoil rotation, and displacement values for the inspected weapon. It is a readable approximation, not a frame-perfect in-game spray recording.</p>
      </div>
    </div>
  `;
}

function buildCompactRecoilPreview(weapon) {
  const profile = fallbackRecoilProfile(weapon);
  const points = generateRecoilPoints(weapon, profile, 14, 180, 96);

  return `
    <div class="weapon-recoil-thumb" aria-label="${weapon.name} recoil preview">
      ${recoilSvgPattern(points, 180, 96, true)}
    </div>
  `;
}

function generateRecoilPoints(weapon, profile, count, width, height) {
  const seed = normalize(weapon.name).split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  const points = [];
  let x = width / 2;
  let y = height - 20;

  for (let index = 0; index < count; index += 1) {
    const t = count === 1 ? 0 : index / (count - 1);
    const camera = interpolateVector(profile.minCamera, profile.maxCamera, t);
    const rotation = interpolateVector(profile.minRotation, profile.maxRotation, t);
    const displacement = interpolateVector(profile.minDisplacement, profile.maxDisplacement, t);
    const sway = Math.sin(seed + index * 1.7) * (width / 64);
    const drift = (rotation[1] || camera[1] || displacement[0] || 0) * (width / 34);
    const climb = Math.abs(rotation[0] || camera[0] || displacement[1] || 0) * (height / 18) + height / 55;

    x += drift + sway;
    y -= climb;
    points.push([clamp(x, 10, width - 10), clamp(y, 10, height - 12)]);
  }

  return points;
}

function recoilSvgPattern(points, width, height, compact) {
  const path = points.map(([pointX, pointY], index) => `${index ? "L" : "M"} ${pointX.toFixed(1)} ${pointY.toFixed(1)}`).join(" ");
  const dots = points.map(([pointX, pointY], index) => `
    <circle cx="${pointX.toFixed(1)}" cy="${pointY.toFixed(1)}" r="${compact ? 2 : index === 0 ? 4 : 3}" fill="${index === points.length - 1 ? "#ff9b92" : "#e5b64b"}" />
  `).join("");
  const grid = compact
    ? `M45 10 V86 M90 10 V86 M135 10 V86 M10 32 H170 M10 56 H170 M10 80 H170`
    : `M40 20 V200 M80 20 V200 M120 20 V200 M160 20 V200 M200 20 V200 M240 20 V200 M280 20 V200 M20 60 H300 M20 100 H300 M20 140 H300 M20 180 H300`;
  const axis = compact
    ? `M90 86 V10 M10 82 H170`
    : `M160 200 V20 M20 190 H300`;

  return `
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#0b0f15" />
      <path d="${grid}" stroke="#303947" stroke-width="1" opacity="0.58" />
      <path d="${axis}" stroke="#aab6c5" stroke-width="${compact ? 1 : 1.4}" opacity="0.5" />
      <path d="${path}" fill="none" stroke="#63b3ed" stroke-width="${compact ? 2.4 : 3.5}" stroke-linecap="round" stroke-linejoin="round" />
      ${dots}
    </svg>
  `;
}

function fallbackRecoilProfile(weapon) {
  const categoryProfiles = {
    "Assault Rifle": [[0.55, -0.1, 0], [1.1, 0.28, 0], [0.2, -0.2, 0], [0.7, 0.4, 0]],
    "PDW": [[0.45, -0.18, 0], [0.9, 0.34, 0], [0.3, -0.35, 0], [0.8, 0.5, 0]],
    "LMG": [[0.75, -0.25, 0], [1.35, 0.42, 0], [0.3, -0.25, 0], [1.0, 0.6, 0]],
    "Sniper Rifle": [[1.35, -0.1, 0], [2.2, 0.22, 0], [0.2, -0.12, 0], [0.7, 0.2, 0]],
    "Carbine": [[0.5, -0.14, 0], [1.0, 0.3, 0], [0.25, -0.25, 0], [0.75, 0.4, 0]],
    "DMR": [[0.8, -0.12, 0], [1.45, 0.24, 0], [0.2, -0.18, 0], [0.8, 0.32, 0]],
    "Battle Rifle": [[0.95, -0.22, 0], [1.65, 0.38, 0], [0.3, -0.25, 0], [0.95, 0.48, 0]],
    "Shotgun": [[1.15, -0.16, 0], [1.9, 0.28, 0], [0.25, -0.2, 0], [0.8, 0.38, 0]],
    "Pistol": [[0.65, -0.18, 0], [1.15, 0.28, 0], [0.25, -0.25, 0], [0.75, 0.36, 0]],
    "Machine Pistol": [[0.55, -0.3, 0], [1.15, 0.55, 0], [0.35, -0.4, 0], [1.0, 0.7, 0]],
    "Revolver": [[1.05, -0.12, 0], [1.9, 0.24, 0], [0.2, -0.16, 0], [0.8, 0.3, 0]],
    "Other": [[0.9, -0.16, 0], [1.6, 0.32, 0], [0.25, -0.22, 0], [0.85, 0.42, 0]]
  };
  const [minCamera, maxCamera, minRotation, maxRotation] = categoryProfiles[weapon.category] || categoryProfiles.Other;

  return {
    minCamera,
    maxCamera,
    minRotation,
    maxRotation,
    minDisplacement: [0.08, 0.08, 0],
    maxDisplacement: [0.22, 0.28, 0]
  };
}

function parseVector(value = "") {
  const matches = value.match(/-?\d+(?:\.\d+)?/g);
  return matches ? matches.map(Number) : [];
}

function interpolateVector(minimum, maximum, t) {
  const length = Math.max(minimum.length, maximum.length);

  return Array.from({ length }, (_, index) => {
    const start = minimum[index] ?? maximum[index] ?? 0;
    const end = maximum[index] ?? minimum[index] ?? 0;
    return start + (end - start) * t;
  });
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function wikiUrl(name, advanced = false) {
  const title = advanced ? `${name}/Advanced Stats` : name;
  return `https://roblox-phantom-forces.fandom.com/wiki/${encodeURIComponent(title).replace(/%2F/g, "/").replace(/%20/g, "_")}`;
}

const challenges = [
  ["Loadout", "One Life Proof", "Use the current full loadout until you get a five-kill streak, then reroll."],
  ["Loadout", "Attachment Faith", "Turn attachments on and use exactly what the hub gives you for one full match."],
  ["Loadout", "No Favorites", "Use Weapons Only, then play the result even if it hurts your soul a little."],
  ["Loadout", "Attachment Surgeon", "Pick your own weapons, then hit Attachments Only and keep every attachment."],
  ["Class", "Squad Fill", "Pick a matching primary class and play only that class for the whole round."],
  ["Class", "Recon Rush", "Use a Recon-compatible loadout, but fight around objectives instead of sitting back."],
  ["Class", "Support Tax", "Play Support and drop ammo for teammates before chasing kills."],
  ["Class", "Assault Entry", "Be the first player through a doorway or onto the point three times."],
  ["Playstyle", "No Comfort Zone", "After every death, change your route before taking another fight."],
  ["Playstyle", "Hipfire Tax", "Use hipfire for the first three kills of the match."],
  ["Playstyle", "Quiet Hands", "No panic spraying. Fire in controlled bursts for one full life."],
  ["Playstyle", "Close The Gap", "Every kill must happen inside medium range or closer for one life."],
  ["Objective", "Flag First", "You can only count the challenge complete after helping capture or defend an objective."],
  ["Objective", "Teammate Anchor", "Stay within supporting distance of at least one teammate for five minutes."],
  ["Objective", "Point Bodyguard", "Pick one objective and defend it until the enemy fully clears you out."],
  ["Objective", "Rotate Early", "Move to the next useful lane before the fight comes to you."],
  ["Restriction", "No Reload Greed", "Once you start firing at an enemy, do not reload until the fight is over."],
  ["Restriction", "Secondary Clause", "Get three kills with your secondary before swapping back to primary."],
  ["Restriction", "No Meta Mercy", "If the randomizer gives you a comfortable gun, remove one attachment slot manually."],
  ["Restriction", "Grenade Discipline", "You only get one grenade throw per life. Make it count."]
];

function rollChallenge() {
  const pool = getChallengePool();
  const [type, title, text] = randomItem(pool);
  challengeType.textContent = type;
  challengeTitle.textContent = title;
  challengeText.textContent = text;
  renderChallengeDeck();
}

function getChallengePool() {
  if (activeChallengeCategory === "All") {
    return challenges;
  }

  return challenges.filter(([type]) => type === activeChallengeCategory);
}

function setChallengeCategory(category) {
  activeChallengeCategory = category;
  challengeFilters.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.challengeCategory === category);
  });
  rollChallenge();
}

function renderChallengeDeck() {
  challengeDeck.innerHTML = getChallengePool().map(([type, title, text]) => `
    <article class="mini-challenge">
      <span>${type}</span>
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

form.addEventListener("submit", randomize);
includeLocked.addEventListener("change", randomize);
classMatch.addEventListener("change", randomize);
includeAttachments.addEventListener("change", randomizeAttachmentsOnly);
primaryKillsInput.addEventListener("input", randomizeAttachmentsOnly);
secondaryKillsInput.addEventListener("input", randomizeAttachmentsOnly);
randomizeWeaponsButton.addEventListener("click", randomizeWeaponsOnly);
randomizeAttachmentsButton.addEventListener("click", randomizeAttachmentsOnly);
copyButton.addEventListener("click", copyLoadout);
weaponSearch.addEventListener("input", renderWeaponBrowser);
weaponCategory.addEventListener("change", renderWeaponBrowser);
randomChallengeButton.addEventListener("click", rollChallenge);
challengeFilters.forEach((button) => {
  button.addEventListener("click", () => setChallengeCategory(button.dataset.challengeCategory));
});
navButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});
weaponBrowser.addEventListener("click", (event) => {
  const inspectButton = event.target.closest("[data-inspect-kind]");
  const button = event.target.closest("[data-select-kind]");

  if (inspectButton) {
    inspectWeapon(inspectButton.dataset.inspectKind, inspectButton.dataset.inspectWeapon);
    return;
  }

  if (button) {
    selectWeapon(button.dataset.selectKind, button.dataset.selectWeapon);
  }
});
useInspectedWeaponButton.addEventListener("click", () => {
  selectWeapon(inspectedWeapon.kind, inspectedWeapon.weapon.name);
});

setupWeaponBrowser();
renderInspector();
rollChallenge();
randomize();
