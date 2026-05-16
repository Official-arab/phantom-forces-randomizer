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

let currentLoadout = { primary: primaries[0], secondary: secondaries[0], grenade: grenades[0], className: "" };

function toWeapon([name, rank, category, unlockLabel]) {
  return { name, rank, category, unlockLabel };
}

function getRank() {
  return Math.max(0, Number.parseInt(rankInput.value, 10) || 0);
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

function randomize(event) {
  event?.preventDefault();

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
    primary: randomItemExcept(primaryPool, currentLoadout.primary),
    secondary: randomItemExcept(secondaryPool, currentLoadout.secondary),
    grenade: randomItemExcept(grenadePool, currentLoadout.grenade),
    className
  };

  render(rank);
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
    `Grenade: ${currentLoadout.grenade.name} (${currentLoadout.grenade.category}, ${unlockText(currentLoadout.grenade).toLowerCase()})`
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

form.addEventListener("submit", randomize);
includeLocked.addEventListener("change", randomize);
classMatch.addEventListener("change", randomize);
copyButton.addEventListener("click", copyLoadout);

randomize();
