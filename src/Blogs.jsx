/* Section 7: From the Workshop — blog cards styled like world cards */

const BLOG_POSTS = [
  {
    key: 'corner',
    tag: 'Play & Learning',
    title: 'Why the corner is the most important room in the house',
    lede: 'A child building alone in a quiet spot isn\'t being antisocial. They\'re doing the deepest kind of thinking.',
    date: 'April 2026',
    readTime: '4 min',
    color: '#F5B731',
    ink: '#3B2709',
    paper: '#FFE8B5',
    paperDeep: '#F7CE7A',
  },
  {
    key: 'craft',
    tag: 'Behind the Toy',
    title: 'How we design every Kona toy to survive a thousand bedtimes',
    lede: 'The secret isn\'t the wood or the finish. It\'s the moment we ask: what happens when a three-year-old sits on this?',
    date: 'March 2026',
    readTime: '6 min',
    color: '#0F8B6E',
    ink: '#06392E',
    paper: '#CFEFE3',
    paperDeep: '#8DD1B8',
  },
  {
    key: 'face',
    tag: 'Founder\'s Desk',
    title: 'The face they make when they show you what they built',
    lede: 'That look — chest out, eyes wide, totally sure this is the greatest thing in the world — is the whole reason Kona exists.',
    date: 'February 2026',
    readTime: '3 min',
    color: '#E85D3A',
    ink: '#4A1409',
    paper: '#FFD5C1',
    paperDeep: '#F79679',
  },
];

function BlogArt({ scene, color, ink, paper, paperDeep }) {
  if (scene === 'corner') {
    return (
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="bl-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
        </defs>
        <rect width="320" height="180" fill="url(#bl-sky)"/>
        {/* walls meeting at corner */}
        <path d="M0 0 L160 60 L320 0 L320 180 L0 180 Z" fill={paperDeep} opacity="0.4"/>
        <path d="M140 60 L160 60 L160 180 L140 180 Z" fill={ink} opacity="0.08"/>
        {/* window */}
        <rect x="220" y="20" width="60" height="70" rx="30" fill={color} opacity="0.9"/>
        <line x1="220" y1="55" x2="280" y2="55" stroke={ink} strokeWidth="2" opacity="0.3"/>
        <line x1="250" y1="20" x2="250" y2="90" stroke={ink} strokeWidth="2" opacity="0.3"/>
        {/* sunbeam */}
        <path d="M220 30 L140 120" stroke={color} strokeWidth="40" strokeLinecap="round" opacity="0.15"/>
        {/* kid sitting cross-legged */}
        <g transform="translate(60 95)">
          <ellipse cx="30" cy="55" rx="35" ry="15" fill={color}/>
          <ellipse cx="30" cy="40" rx="22" ry="18" fill={color}/>
          <circle cx="30" cy="20" r="14" fill="#D4956A"/>
          <path d="M18 32 Q 30 46 42 32" stroke={color} strokeWidth="8" strokeLinecap="round" fill="none"/>
        </g>
        {/* scattered toy pieces */}
        <rect x="120" y="148" width="12" height="12" rx="2" fill={color} transform="rotate(15 126 154)"/>
        <circle cx="155" cy="155" r="6" fill={ink} opacity="0.6"/>
        <rect x="168" y="144" width="10" height="10" rx="2" fill="#B583D9" transform="rotate(-10 173 149)"/>
      </svg>
    );
  }
  if (scene === 'craft') {
    return (
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="bl-bench" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
        </defs>
        <rect width="320" height="180" fill="url(#bl-bench)"/>
        {/* workshop bench */}
        <rect x="0" y="120" width="320" height="12" fill={ink} opacity="0.85"/>
        <rect x="0" y="132" width="320" height="48" fill={ink} opacity="0.65"/>
        {/* bench legs */}
        <rect x="20" y="132" width="12" height="48" fill={ink}/>
        <rect x="288" y="132" width="12" height="48" fill={ink}/>
        {/* tools hanging */}
        <line x1="60" y1="0" x2="60" y2="50" stroke={ink} strokeWidth="1.5" opacity="0.3"/>
        <path d="M50 50 L70 50 L68 65 L52 65 Z" fill={ink} opacity="0.6"/>
        <line x1="110" y1="0" x2="110" y2="40" stroke={ink} strokeWidth="1.5" opacity="0.3"/>
        <ellipse cx="110" cy="55" rx="10" ry="15" fill={ink} opacity="0.6"/>
        {/* toy being assembled on bench */}
        <g transform="translate(140 65)">
          {/* main body block */}
          <rect x="0" y="20" width="60" height="35" rx="6" fill={color}/>
          {/* wheels */}
          <circle cx="12" cy="58" r="9" fill={ink}/>
          <circle cx="12" cy="58" r="4" fill={paper}/>
          <circle cx="48" cy="58" r="9" fill={ink}/>
          <circle cx="48" cy="58" r="4" fill={paper}/>
          {/* cab */}
          <path d="M10 20 L18 4 L42 4 L50 20 Z" fill={paperDeep} stroke={color} strokeWidth="1.5"/>
          {/* window */}
          <path d="M20 18 L24 8 L38 8 L42 18 Z" fill={paper} opacity="0.8"/>
          {/* loose piece nearby */}
          <rect x="72" y="30" width="14" height="14" rx="3" fill={ink} opacity="0.7" transform="rotate(20 79 37)"/>
        </g>
        {/* sawdust dots */}
        {[[50,112],[80,108],[200,110],[240,115],[290,109]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="2" fill={color} opacity="0.5"/>
        ))}
      </svg>
    );
  }
  if (scene === 'face') {
    return (
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="bl-room" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={paper}/>
            <stop offset="1" stopColor={paperDeep}/>
          </linearGradient>
          <radialGradient id="bl-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor={color} stopOpacity="0.3"/>
            <stop offset="1" stopColor={color} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="320" height="180" fill="url(#bl-room)"/>
        {/* warm glow behind kid */}
        <circle cx="160" cy="90" r="90" fill="url(#bl-glow)"/>
        {/* floor */}
        <rect x="0" y="145" width="320" height="35" fill={ink} opacity="0.1"/>
        {/* adult legs (parent) */}
        <rect x="20" y="100" width="18" height="80" rx="9" fill={ink} opacity="0.7"/>
        <rect x="44" y="100" width="18" height="80" rx="9" fill={ink} opacity="0.7"/>
        {/* adult torso */}
        <path d="M14 70 Q 30 60 55 70 L 60 105 L10 105 Z" fill={ink} opacity="0.7"/>
        {/* adult head */}
        <circle cx="36" cy="52" r="18" fill="#C4875A"/>
        {/* child standing in front, arms up holding toy */}
        <g transform="translate(120 50)">
          {/* body */}
          <path d="M20 55 Q 30 45 40 55 L 42 100 L18 100 Z" fill={color}/>
          {/* head */}
          <circle cx="30" cy="38" r="16" fill="#D4956A"/>
          {/* BIG smile */}
          <path d="M22 42 Q 30 50 38 42" stroke={ink} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* eyes sparkle */}
          <circle cx="24" cy="35" r="2.5" fill={ink}/>
          <circle cx="36" cy="35" r="2.5" fill={ink}/>
          <circle cx="24.8" cy="34.2" r="1" fill="white"/>
          <circle cx="36.8" cy="34.2" r="1" fill="white"/>
          {/* cheeks */}
          <circle cx="20" cy="42" r="4" fill={color} opacity="0.5"/>
          <circle cx="40" cy="42" r="4" fill={color} opacity="0.5"/>
          {/* arms up */}
          <path d="M20 65 L0 40" stroke={color} strokeWidth="10" strokeLinecap="round"/>
          <path d="M40 65 L60 40" stroke={color} strokeWidth="10" strokeLinecap="round"/>
          {/* toy held up */}
          <g transform="translate(-8 10)">
            <rect x="0" y="0" width="22" height="22" rx="4" fill={ink} transform="rotate(-15 11 11)"/>
            <rect x="4" y="4" width="14" height="14" rx="2" fill={paper} opacity="0.6" transform="rotate(-15 11 11)"/>
          </g>
          <g transform="translate(42 10)">
            <rect x="0" y="0" width="22" height="22" rx="4" fill={ink} transform="rotate(15 11 11)"/>
            <rect x="4" y="4" width="14" height="14" rx="2" fill={paper} opacity="0.6" transform="rotate(15 11 11)"/>
          </g>
        </g>
        {/* sparkles */}
        <g fill={color}>
          <path d="M90 30 l1.5 5 l5 1.5 l-5 1.5 l-1.5 5 l-1.5-5 l-5-1.5 l5-1.5z"/>
          <path d="M240 25 l1 3.5 l3.5 1 l-3.5 1 l-1 3.5 l-1-3.5 l-3.5-1 l3.5-1z"/>
          <path d="M270 70 l1 3 l3 1 l-3 1 l-1 3 l-1-3 l-3-1 l3-1z"/>
        </g>
      </svg>
    );
  }
  return null;
}

function BlogCard({ post, i }) {
  return (
    <a href="#blog" className="kona-blog-card"
       style={{ '--b-color': post.color, '--b-ink': post.ink, '--b-paper': post.paper, '--b-paper-deep': post.paperDeep, '--b-i': i }}>
      <div className="kona-blog-card__art">
        <BlogArt scene={post.key} color={post.color} ink={post.ink} paper={post.paper} paperDeep={post.paperDeep}/>
        <div className="kona-blog-card__badge">
          <span className="kona-blog-card__badge-tag">{post.tag}</span>
        </div>
        <div className="kona-blog-card__peek">
          Read the story
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="kona-blog-card__body">
        <h3 className="kona-blog-card__title">{post.title}</h3>
        <p className="kona-blog-card__lede">{post.lede}</p>
        <div className="kona-blog-card__meta">
          <span>{post.date}</span>
          <span className="kona-blog-card__dot">·</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </a>
  );
}

function Blogs({ vibe }) {
  return (
    <section id="blog" className={`kona-blog vibe-${vibe}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt="" />
      </div>

      <div className="kona-blog__header">
        <span className="kona-eyebrow">07 · From the workshop</span>
        <h2 className="kona-blog__headline">
          Stories worth sitting down for.
        </h2>
        <p className="kona-blog__sub">
          On play, craft, childhood, and the small things that matter most.
        </p>
      </div>

      <div className="kona-blog__grid">
        {BLOG_POSTS.map((post, i) => <BlogCard key={post.key} post={post} i={i}/>)}
      </div>

      <div className="kona-blog__footer">
        <a href="#blog" className="kona-btn kona-btn--outline-ink">
          Read all stories
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

window.Blogs = Blogs;
