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
    scene: 'animals',
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
    scene: 'magical',
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
    scene: 'dinos',
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
    scene: 'vehicles',
  },
];

function WorldArt({ scene, color, ink, paper, paperDeep }) {
  if (scene === 'animals') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="a-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
          <pattern id="a-grass" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.7" fill={ink} opacity="0.15"/>
          </pattern>
        </defs>
        <rect width="320" height="220" fill="url(#a-sky)"/>
        {/* sun */}
        <circle cx="245" cy="55" r="28" fill={color}/>
        <circle cx="245" cy="55" r="38" fill={color} opacity="0.25"/>
        {/* distant hills */}
        <path d="M0 150 Q 60 115 130 135 T 260 130 T 320 138 L320 220 L0 220 Z" fill={color} opacity="0.55"/>
        <path d="M0 170 Q 80 140 160 160 T 320 160 L320 220 L0 220 Z" fill={ink} opacity="0.2"/>
        {/* grass */}
        <rect x="0" y="160" width="320" height="60" fill="url(#a-grass)"/>
        {/* tree */}
        <rect x="44" y="120" width="7" height="50" fill={ink} opacity="0.85"/>
        <circle cx="47" cy="120" r="22" fill={color}/>
        <circle cx="37" cy="115" r="14" fill={color} opacity="0.9"/>
        <circle cx="57" cy="118" r="15" fill={color} opacity="0.9"/>
        {/* bear (wooden figure) */}
        <g transform="translate(100 130)">
          <ellipse cx="30" cy="42" rx="30" ry="18" fill={ink}/>
          <circle cx="16" cy="30" r="16" fill={ink}/>
          <circle cx="7" cy="20" r="6" fill={ink}/>
          <circle cx="25" cy="20" r="6" fill={ink}/>
          <circle cx="9" cy="22" r="2" fill={paper}/>
          <circle cx="23" cy="22" r="2" fill={paper}/>
          <circle cx="13" cy="28" r="1.2" fill="#fff"/>
          <circle cx="19" cy="28" r="1.2" fill="#fff"/>
          <ellipse cx="16" cy="35" rx="3" ry="2" fill={color}/>
          <path d="M 14 37 Q 16 39 18 37" stroke={paper} strokeWidth="1" fill="none"/>
        </g>
        {/* bunny */}
        <g transform="translate(200 148)">
          <ellipse cx="18" cy="28" rx="18" ry="14" fill={paper}/>
          <circle cx="10" cy="18" r="10" fill={paper}/>
          <ellipse cx="6" cy="8" rx="3" ry="8" fill={paper}/>
          <ellipse cx="14" cy="6" rx="3" ry="10" fill={paper}/>
          <ellipse cx="6" cy="8" rx="1.5" ry="5" fill={color}/>
          <ellipse cx="14" cy="6" rx="1.5" ry="6" fill={color}/>
          <circle cx="7" cy="18" r="1.3" fill={ink}/>
          <circle cx="13" cy="18" r="1.3" fill={ink}/>
          <circle cx="10" cy="22" r="1" fill={ink}/>
        </g>
        {/* bird */}
        <g transform="translate(260 70)">
          <ellipse cx="0" cy="0" rx="9" ry="6" fill={ink}/>
          <circle cx="8" cy="-2" r="4" fill={ink}/>
          <path d="M11 -2 L15 -3 L12 0 Z" fill={color}/>
          <circle cx="8" cy="-3" r="0.9" fill="#fff"/>
        </g>
        {/* scattered pieces */}
        <rect x="70" y="185" width="12" height="12" rx="2" fill={color} transform="rotate(18 76 191)"/>
        <circle cx="170" cy="192" r="5" fill={ink} opacity="0.75"/>
      </svg>
    );
  }
  if (scene === 'magical') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="m-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paperDeep}/>
            <stop offset="0.6" stopColor={paper}/>
            <stop offset="1" stopColor={paper}/>
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="url(#m-sky)"/>
        {/* stars twinkly */}
        {[[30,30,2],[60,18,1.4],[90,42,1.8],[140,20,1.2],[200,30,1.5],[240,22,1.2],[280,50,1.8],[296,28,1],[18,60,1],[116,14,1]].map(([x,y,r],i)=>(
          <circle key={i} cx={x} cy={y} r={r} fill={ink} opacity="0.5"/>
        ))}
        {/* moon crescent */}
        <g transform="translate(225 58)">
          <circle r="26" fill={color}/>
          <circle cx="-8" r="22" fill={paperDeep}/>
        </g>
        {/* far castle silhouette */}
        <path d="M0 168 L0 140 L18 140 L18 120 L28 120 L28 140 L48 140 L48 110 L58 100 L68 110 L68 140 L92 140 L92 122 L105 122 L105 140 L122 140 L122 148 L0 148 Z" fill={ink} opacity="0.55"/>
        {/* rolling hill foreground */}
        <path d="M0 200 Q 120 160 220 190 T 320 180 L320 220 L0 220 Z" fill={ink} opacity="0.85"/>
        {/* unicorn on hill (stylized) */}
        <g transform="translate(140 140)">
          <ellipse cx="20" cy="40" rx="26" ry="14" fill={paper}/>
          <rect x="6" y="42" width="5" height="16" fill={paper}/>
          <rect x="16" y="44" width="5" height="18" fill={paper}/>
          <rect x="26" y="44" width="5" height="18" fill={paper}/>
          <rect x="36" y="42" width="5" height="16" fill={paper}/>
          {/* head + neck */}
          <path d="M38 36 Q 48 28 50 18 Q 52 14 48 10 Q 40 10 36 18 Q 32 28 30 34 Z" fill={paper}/>
          {/* horn */}
          <path d="M48 10 L50 -2 L52 10 Z" fill={color}/>
          {/* mane */}
          <path d="M32 18 Q 26 22 30 32 Q 32 26 34 26 Q 28 34 32 38" fill={color} opacity="0.8"/>
          {/* eye */}
          <circle cx="44" cy="20" r="1.2" fill={ink}/>
        </g>
        {/* sparkles */}
        <g fill={color}>
          <path d="M95 95 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z"/>
          <path d="M270 110 l1.5 5 l5 1.5 l-5 1.5 l-1.5 5 l-1.5 -5 l-5 -1.5 l5 -1.5 z"/>
          <path d="M60 120 l1 3.5 l3.5 1 l-3.5 1 l-1 3.5 l-1 -3.5 l-3.5 -1 l3.5 -1 z"/>
        </g>
      </svg>
    );
  }
  if (scene === 'dinos') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="d-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="url(#d-sky)"/>
        {/* sun */}
        <circle cx="60" cy="50" r="22" fill={color} opacity="0.35"/>
        <circle cx="60" cy="50" r="16" fill={color}/>
        {/* mountains */}
        <path d="M0 160 L60 80 L110 140 L160 60 L220 130 L260 90 L320 150 L320 220 L0 220 Z" fill={ink} opacity="0.7"/>
        <path d="M150 60 L155 70 L145 70 Z" fill={paper}/>
        <path d="M60 80 L64 90 L56 90 Z" fill={paper}/>
        {/* ferns */}
        <g stroke={ink} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M15 200 Q 15 180 20 170"/>
          <path d="M20 170 Q 26 172 28 178"/>
          <path d="M20 170 Q 14 172 12 178"/>
          <path d="M18 185 Q 24 186 26 190"/>
          <path d="M18 185 Q 12 186 10 190"/>
        </g>
        {/* volcano */}
        <path d="M255 200 L285 120 L315 200 Z" fill={ink}/>
        <path d="M276 130 Q 285 108 294 130" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="285" cy="110" r="5" fill={color}/>
        <circle cx="292" cy="102" r="3" fill={color} opacity="0.7"/>
        {/* big stegosaurus-ish dino body */}
        <g transform="translate(90 110)">
          {/* tail */}
          <path d="M-10 58 Q -40 60 -70 50 L -70 46 Q -40 52 -10 54 Z" fill={color}/>
          {/* body */}
          <path d="M -10 58 Q 20 30 60 34 Q 100 40 115 60 L 115 72 L -10 72 Z" fill={color}/>
          {/* belly highlight */}
          <path d="M 10 68 Q 60 75 105 68" stroke={ink} strokeWidth="0.8" fill="none" opacity="0.3"/>
          {/* plates */}
          <g fill={ink} opacity="0.85">
            <path d="M-2 48 L5 32 L15 48 Z"/>
            <path d="M18 40 L28 22 L38 40 Z"/>
            <path d="M42 36 L52 16 L64 36 Z"/>
            <path d="M70 38 L80 22 L90 38 Z"/>
          </g>
          {/* head */}
          <path d="M 110 52 Q 130 38 142 50 Q 148 58 142 64 Q 125 66 112 62 Z" fill={color}/>
          <circle cx="135" cy="52" r="2" fill={ink}/>
          <path d="M 128 60 L 136 60" stroke={ink} strokeWidth="1"/>
          {/* legs */}
          <rect x="10" y="68" width="10" height="20" fill={ink}/>
          <rect x="90" y="68" width="10" height="20" fill={ink}/>
        </g>
        {/* baby dino */}
        <g transform="translate(200 175)">
          <ellipse cx="12" cy="8" rx="14" ry="8" fill={ink} opacity="0.9"/>
          <circle cx="22" cy="4" r="6" fill={ink} opacity="0.9"/>
          <circle cx="24" cy="3" r="0.9" fill={paper}/>
          <rect x="5" y="14" width="3" height="6" fill={ink}/>
          <rect x="17" y="14" width="3" height="6" fill={ink}/>
        </g>
        {/* ground */}
        <rect x="0" y="200" width="320" height="20" fill={ink} opacity="0.88"/>
      </svg>
    );
  }
  if (scene === 'vehicles') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="v-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="url(#v-sky)"/>
        {/* clouds */}
        <g fill="#fff" opacity="0.75">
          <ellipse cx="60" cy="45" rx="24" ry="10"/>
          <ellipse cx="48" cy="42" rx="14" ry="10"/>
          <ellipse cx="72" cy="42" rx="14" ry="10"/>
          <ellipse cx="230" cy="60" rx="20" ry="8"/>
          <ellipse cx="220" cy="58" rx="12" ry="8"/>
          <ellipse cx="240" cy="58" rx="12" ry="8"/>
        </g>
        {/* distant city */}
        <g fill={ink} opacity="0.6">
          <rect x="0" y="110" width="22" height="60"/>
          <rect x="26" y="95" width="18" height="75"/>
          <rect x="48" y="115" width="24" height="55"/>
          <rect x="76" y="100" width="14" height="70"/>
          <rect x="240" y="105" width="20" height="65"/>
          <rect x="264" y="120" width="18" height="50"/>
          <rect x="286" y="95" width="22" height="75"/>
        </g>
        {/* window lights */}
        <g fill={color} opacity="0.9">
          <rect x="30" y="105" width="3" height="4"/>
          <rect x="37" y="105" width="3" height="4"/>
          <rect x="30" y="115" width="3" height="4"/>
          <rect x="80" y="112" width="3" height="4"/>
          <rect x="290" y="108" width="3" height="4"/>
          <rect x="298" y="120" width="3" height="4"/>
        </g>
        {/* road */}
        <rect x="0" y="170" width="320" height="50" fill={ink}/>
        {/* lane markings */}
        <g stroke={paper} strokeWidth="3" strokeDasharray="14 10">
          <line x1="0" y1="195" x2="320" y2="195"/>
        </g>
        {/* traffic light */}
        <g transform="translate(20 130)">
          <rect x="0" y="0" width="12" height="32" rx="3" fill={ink}/>
          <circle cx="6" cy="7" r="3" fill={color}/>
          <circle cx="6" cy="16" r="3" fill={ink} opacity="0.5"/>
          <circle cx="6" cy="25" r="3" fill="#7CC77C" opacity="0.9"/>
          <rect x="5" y="32" width="2" height="28" fill={ink}/>
        </g>
        {/* main car */}
        <g transform="translate(100 140)">
          <path d="M 4 32 L 16 12 Q 20 6 28 6 L 78 6 Q 86 6 90 14 L 104 32 Z" fill={color}/>
          {/* windows */}
          <path d="M 26 12 L 34 18 L 34 28 L 22 28 Z" fill={paper} stroke={ink} strokeWidth="1"/>
          <path d="M 38 18 L 70 18 L 70 28 L 38 28 Z" fill={paper} stroke={ink} strokeWidth="1"/>
          <path d="M 74 18 L 84 14 L 94 28 L 74 28 Z" fill={paper} stroke={ink} strokeWidth="1"/>
          {/* headlights */}
          <rect x="100" y="24" width="5" height="4" rx="1" fill="#FFF7C8"/>
          <rect x="3" y="24" width="5" height="4" rx="1" fill={color} opacity="0.7"/>
          {/* wheels */}
          <circle cx="24" cy="35" r="8" fill={ink}/>
          <circle cx="24" cy="35" r="3.5" fill={paper}/>
          <circle cx="84" cy="35" r="8" fill={ink}/>
          <circle cx="84" cy="35" r="3.5" fill={paper}/>
        </g>
        {/* motion lines */}
        <g stroke={ink} strokeWidth="2" strokeLinecap="round" opacity="0.4">
          <line x1="70" y1="160" x2="90" y2="160"/>
          <line x1="60" y1="168" x2="85" y2="168"/>
        </g>
        {/* tiny plane */}
        <g transform="translate(260 30)">
          <path d="M 0 0 L 16 -3 L 22 0 L 16 3 Z" fill={ink}/>
          <path d="M 10 -2 L 14 -8 L 16 -2 Z" fill={ink}/>
        </g>
      </svg>
    );
  }
  return null;
}

function WorldCard({ w, i }) {
  return (
    <a href={`#world-${w.key}`} className="kona-world-card"
       style={{ '--w-color': w.color, '--w-ink': w.ink, '--w-paper': w.paper, '--w-paper-deep': w.paperDeep, '--w-i': i }}>
      <div className="kona-world-card__art">
        <WorldArt scene={w.scene} color={w.color} ink={w.ink} paper={w.paper} paperDeep={w.paperDeep}/>
        <div className="kona-world-card__badge">
          <span className="kona-world-card__badge-n">{String(i+1).padStart(2,'0')}</span>
          <span className="kona-world-card__badge-dot" />
          <span className="kona-world-card__badge-ages">Ages {w.ages}</span>
        </div>

        {/* Peeking kid — appears on hover */}
        <div className="kona-world-card__peeker" aria-hidden>
          <img src="assets/peeker-kid.png" alt=""/>
        </div>

        {/* Page-curl overlay */}
        <div className="kona-world-card__curl" aria-hidden>
          <div className="kona-world-card__curl-front">
            <WorldArt scene={w.scene} color={w.color} ink={w.ink} paper={w.paper} paperDeep={w.paperDeep}/>
          </div>
          <div className="kona-world-card__curl-back">
            <div className="kona-world-card__curl-back-inner">
              <span className="curl-eyebrow">Open {w.name}</span>
              <span className="curl-arrow">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M8 18h20M20 10l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="kona-world-card__peek">
          Peek inside
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
    </a>
  );
}

function Worlds({ vibe, cardStyle }) {
  return (
    <section id="worlds" className={`kona-worlds vibe-${vibe} style-${cardStyle}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt=""/>
      </div>
      <div className="kona-worlds__header">
        <span className="kona-eyebrow kona-eyebrow--light">03 · Explore our worlds</span>
        <h2 className="kona-worlds__headline">Pick a world.</h2>
        <p className="kona-worlds__sub">
          Four universes. One for every child.<br/>Start where their eyes light up first.
        </p>
      </div>

      <div className="kona-worlds__grid">
        {WORLDS.map((w, i) => <WorldCard key={w.key} w={w} i={i}/>)}
      </div>
    </section>
  );
}

window.Worlds = Worlds;
