/* Section 3: Explore Our Worlds — rich, layered illustrations per world */

const WORLDS = [
{
  key: 'animals',
  name: 'Animal Kingdom',
  ages: '3–6',
  tagline: 'From the wild — to the warmest arms in the house',
  pieces: 24,
  characters: 6,
  color: '#F5B731',
  ink: '#3B2709',
  paper: '#FFE8B5',
  paperDeep: '#F7CE7A',
  scene: 'animals'
},
{
  key: 'magical',
  name: 'Magical Creatures',
  ages: '3–8',
  tagline: 'From once upon a time — to right now in their hands',
  pieces: 32,
  characters: 8,
  color: '#8B5CF6',
  ink: '#261449',
  paper: '#EDE0FF',
  paperDeep: '#C9ADEF',
  scene: 'magical'
},
{
  key: 'dinos',
  name: 'Dinosaurs',
  ages: '3–8',
  tagline: 'From ruling the earth — to fitting in their little one',
  pieces: 40,
  characters: 5,
  color: '#0F8B6E',
  ink: '#06392E',
  paper: '#CFEFE3',
  paperDeep: '#8DD1B8',
  scene: 'dinos'
},
{
  key: 'vehicles',
  name: 'Vehicles',
  ages: '6–8',
  tagline: 'From the open road — to wherever they imagine',
  pieces: 48,
  characters: 9,
  color: '#E85D3A',
  ink: '#4A1409',
  paper: '#FFD5C1',
  paperDeep: '#F79679',
  scene: 'vehicles'
}];


function WorldArt({ scene, color, ink, paper, paperDeep }) {
  if (scene === 'animals') {
    return (
      <img
        src="assets/world-animals.png"
        alt="Animal Kingdom"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    );
  }
    if (scene === 'magical') {
    return (
      <img
        src="assets/world-magical.png"
        alt="Magical Creatures"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    );
  }
    if (scene === 'dinos') {
    return (
      <img
        src="assets/world-dinos.png"
        alt="Dinosaurs"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    );
  }
  if (scene === 'dinos-svg') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="d-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper} />
            <stop offset="1" stopColor={paperDeep} />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="url(#d-sky)" />
        {/* sun */}
        <circle cx="60" cy="50" r="22" fill={color} opacity="0.35" />
        <circle cx="60" cy="50" r="16" fill={color} />
        {/* mountains */}
        <path d="M0 160 L60 80 L110 140 L160 60 L220 130 L260 90 L320 150 L320 220 L0 220 Z" fill={ink} opacity="0.7" />
        <path d="M150 60 L155 70 L145 70 Z" fill={paper} />
        <path d="M60 80 L64 90 L56 90 Z" fill={paper} />
        {/* ferns */}
        <g stroke={ink} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M15 200 Q 15 180 20 170" />
          <path d="M20 170 Q 26 172 28 178" />
          <path d="M20 170 Q 14 172 12 178" />
          <path d="M18 185 Q 24 186 26 190" />
          <path d="M18 185 Q 12 186 10 190" />
        </g>
        {/* volcano */}
        <path d="M255 200 L285 120 L315 200 Z" fill={ink} />
        <path d="M276 130 Q 285 108 294 130" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="285" cy="110" r="5" fill={color} />
        <circle cx="292" cy="102" r="3" fill={color} opacity="0.7" />
        {/* big stegosaurus-ish dino body */}
        <g transform="translate(90 110)">
          {/* tail */}
          <path d="M-10 58 Q -40 60 -70 50 L -70 46 Q -40 52 -10 54 Z" fill={color} />
          {/* body */}
          <path d="M -10 58 Q 20 30 60 34 Q 100 40 115 60 L 115 72 L -10 72 Z" fill={color} />
          {/* belly highlight */}
          <path d="M 10 68 Q 60 75 105 68" stroke={ink} strokeWidth="0.8" fill="none" opacity="0.3" />
          {/* plates */}
          <g fill={ink} opacity="0.85">
            <path d="M-2 48 L5 32 L15 48 Z" />
            <path d="M18 40 L28 22 L38 40 Z" />
            <path d="M42 36 L52 16 L64 36 Z" />
            <path d="M70 38 L80 22 L90 38 Z" />
          </g>
          {/* head */}
          <path d="M 110 52 Q 130 38 142 50 Q 148 58 142 64 Q 125 66 112 62 Z" fill={color} />
          <circle cx="135" cy="52" r="2" fill={ink} />
          <path d="M 128 60 L 136 60" stroke={ink} strokeWidth="1" />
          {/* legs */}
          <rect x="10" y="68" width="10" height="20" fill={ink} />
          <rect x="90" y="68" width="10" height="20" fill={ink} />
        </g>
        {/* baby dino */}
        <g transform="translate(200 175)">
          <ellipse cx="12" cy="8" rx="14" ry="8" fill={ink} opacity="0.9" />
          <circle cx="22" cy="4" r="6" fill={ink} opacity="0.9" />
          <circle cx="24" cy="3" r="0.9" fill={paper} />
          <rect x="5" y="14" width="3" height="6" fill={ink} />
          <rect x="17" y="14" width="3" height="6" fill={ink} />
        </g>
        {/* ground */}
        <rect x="0" y="200" width="320" height="20" fill={ink} opacity="0.88" />
      </svg>);

  }
  if (scene === 'vehicles') {
    return (
      <img
        src="assets/world-vehicles.png"
        alt="Vehicles"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    );
  }
  if (scene === 'vehicles-svg') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="v-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper} />
            <stop offset="1" stopColor={paperDeep} />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="url(#v-sky)" />
        {/* clouds */}
        <g fill="#fff" opacity="0.75">
          <ellipse cx="60" cy="45" rx="24" ry="10" />
          <ellipse cx="48" cy="42" rx="14" ry="10" />
          <ellipse cx="72" cy="42" rx="14" ry="10" />
          <ellipse cx="230" cy="60" rx="20" ry="8" />
          <ellipse cx="220" cy="58" rx="12" ry="8" />
          <ellipse cx="240" cy="58" rx="12" ry="8" />
        </g>
        {/* distant city */}
        <g fill={ink} opacity="0.6">
          <rect x="0" y="110" width="22" height="60" />
          <rect x="26" y="95" width="18" height="75" />
          <rect x="48" y="115" width="24" height="55" />
          <rect x="76" y="100" width="14" height="70" />
          <rect x="240" y="105" width="20" height="65" />
          <rect x="264" y="120" width="18" height="50" />
          <rect x="286" y="95" width="22" height="75" />
        </g>
        {/* window lights */}
        <g fill={color} opacity="0.9">
          <rect x="30" y="105" width="3" height="4" />
          <rect x="37" y="105" width="3" height="4" />
          <rect x="30" y="115" width="3" height="4" />
          <rect x="80" y="112" width="3" height="4" />
          <rect x="290" y="108" width="3" height="4" />
          <rect x="298" y="120" width="3" height="4" />
        </g>
        {/* road */}
        <rect x="0" y="170" width="320" height="50" fill={ink} />
        {/* lane markings */}
        <g stroke={paper} strokeWidth="3" strokeDasharray="14 10">
          <line x1="0" y1="195" x2="320" y2="195" />
        </g>
        {/* traffic light */}
        <g transform="translate(20 130)">
          <rect x="0" y="0" width="12" height="32" rx="3" fill={ink} />
          <circle cx="6" cy="7" r="3" fill={color} />
          <circle cx="6" cy="16" r="3" fill={ink} opacity="0.5" />
          <circle cx="6" cy="25" r="3" fill="#7CC77C" opacity="0.9" />
          <rect x="5" y="32" width="2" height="28" fill={ink} />
        </g>
        {/* main car */}
        <g transform="translate(100 140)">
          <path d="M 4 32 L 16 12 Q 20 6 28 6 L 78 6 Q 86 6 90 14 L 104 32 Z" fill={color} />
          {/* windows */}
          <path d="M 26 12 L 34 18 L 34 28 L 22 28 Z" fill={paper} stroke={ink} strokeWidth="1" />
          <path d="M 38 18 L 70 18 L 70 28 L 38 28 Z" fill={paper} stroke={ink} strokeWidth="1" />
          <path d="M 74 18 L 84 14 L 94 28 L 74 28 Z" fill={paper} stroke={ink} strokeWidth="1" />
          {/* headlights */}
          <rect x="100" y="24" width="5" height="4" rx="1" fill="#FFF7C8" />
          <rect x="3" y="24" width="5" height="4" rx="1" fill={color} opacity="0.7" />
          {/* wheels */}
          <circle cx="24" cy="35" r="8" fill={ink} />
          <circle cx="24" cy="35" r="3.5" fill={paper} />
          <circle cx="84" cy="35" r="8" fill={ink} />
          <circle cx="84" cy="35" r="3.5" fill={paper} />
        </g>
        {/* motion lines */}
        <g stroke={ink} strokeWidth="2" strokeLinecap="round" opacity="0.4">
          <line x1="70" y1="160" x2="90" y2="160" />
          <line x1="60" y1="168" x2="85" y2="168" />
        </g>
        {/* tiny plane */}
        <g transform="translate(260 30)">
          <path d="M 0 0 L 16 -3 L 22 0 L 16 3 Z" fill={ink} />
          <path d="M 10 -2 L 14 -8 L 16 -2 Z" fill={ink} />
        </g>
      </svg>);

  }
  return null;
}

function WorldCard({ w, i }) {
  return (
    <a href={`#world-${w.key}`} className="kona-world-card"
    style={{ '--w-color': w.color, '--w-ink': w.ink, '--w-paper': w.paper, '--w-paper-deep': w.paperDeep, '--w-i': i }}>
      <div className="kona-world-card__art">
        <WorldArt scene={w.scene} color={w.color} ink={w.ink} paper={w.paper} paperDeep={w.paperDeep} />
        <div className="kona-world-card__badge">
          <span className="kona-world-card__badge-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="kona-world-card__badge-dot" />
          <span className="kona-world-card__badge-ages">Ages {w.ages}</span>
        </div>

        {/* Page-curl overlay */}
        <div className="kona-world-card__curl" aria-hidden>
          <div className="kona-world-card__curl-front">
            <WorldArt scene={w.scene} color={w.color} ink={w.ink} paper={w.paper} paperDeep={w.paperDeep} />
          </div>
          <div className="kona-world-card__curl-back">
            <div className="kona-world-card__curl-back-inner">
              <span className="curl-eyebrow">Open {w.name}</span>
              <span className="curl-arrow">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M8 18h20M20 10l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="kona-world-card__peek">
          Peek inside
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="kona-world-card__body">
        <h3 className="kona-world-card__name">{w.name}</h3>
        <p className="kona-world-card__tag">{w.tagline}</p>
        <div className="kona-world-card__stats">
          <div className="stat">
            <span className="stat-num">{w.pieces}</span>
            <span className="stat-lbl">pieces</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-num">{w.characters}</span>
            <span className="stat-lbl">characters</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-lbl">little world</span>
          </div>
        </div>
      </div>
    </a>);

}

function Worlds({ vibe, cardStyle }) {
  return (
    <section id="worlds" className={`kona-worlds vibe-${vibe} style-${cardStyle}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt="" />
      </div>
      <div className="kona-worlds__header">
        <span className="kona-eyebrow kona-eyebrow--light">02 · EXPLORE OUR WORLDS</span>
        <h2 className="kona-worlds__headline">Pick a world.</h2>
        <p className="kona-worlds__sub">
          Four universes. One for every child.<br />Start where their eyes light up first.
        </p>
      </div>

      <div className="kona-worlds__grid">
        {WORLDS.map((w, i) => <WorldCard key={w.key} w={w} i={i} />)}
      </div>
    </section>);

}

window.Worlds = Worlds;