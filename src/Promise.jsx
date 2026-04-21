/* Section 5: The Kona Promise — 4 vertical cards on coral */

const PROMISES = [
  {
    n: '01',
    title: 'Played with,\nnot just played once',
    detail: 'Toys built for the long haul — weighty, made to survive bedtime battles and breakfast reunions.',
    icon: 'hands',
  },
  {
    n: '02',
    title: 'Fun first.\nEverything else follows.',
    detail: 'Joy comes first. The learning sneaks in quietly — through building, breaking, and building again.',
    icon: 'smile',
  },
  {
    n: '03',
    title: 'Simple to start.\nSurprising to stay.',
    detail: 'Easy enough to start at three. Interesting enough to still surprise at eight.',
    icon: 'spiral',
  },
  {
    n: '04',
    title: 'Something worth\nshowing you.',
    detail: "The kind of finish line that ends with a small face saying, 'Look!'",
    icon: 'star',
  },
];

function PromiseIcon({ type }) {
  const common = { width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', 'aria-hidden': true };
  if (type === 'hands') {
    return (
      <svg {...common}>
        <path d="M6 18 Q 6 10 14 10 Q 22 10 22 18 L22 22 Q 14 26 6 22 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M10 10 V 5 M14 10 V 3 M18 10 V 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  }
  if (type === 'smile') {
    return (
      <svg {...common}>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="10" cy="12" r="1.4" fill="currentColor"/>
        <circle cx="18" cy="12" r="1.4" fill="currentColor"/>
        <path d="M9 17 Q 14 21 19 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }
  if (type === 'spiral') {
    return (
      <svg {...common}>
        <path d="M14 14 m -2 0 a 2 2 0 1 1 4 0 a 4 4 0 1 1 -8 0 a 6 6 0 1 1 12 0 a 8 8 0 1 1 -16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }
  if (type === 'star') {
    return (
      <svg {...common}>
        <path d="M14 3 L17 11 L25 12 L19 17 L21 25 L14 21 L7 25 L9 17 L3 12 L11 11 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  return null;
}

function Promise_({ vibe }) {
  return (
    <section id="promise" className={`kona-promise vibe-${vibe}`}>
      <div className="kona-corner-mark kona-corner-mark--light" aria-hidden>
        <img src="assets/kona-logo.png" alt=""/>
      </div>
      <div className="kona-promise__header">
        <span className="kona-eyebrow kona-eyebrow--light">05 · Our word on it</span>
        <h2 className="kona-promise__headline">The Kona Promise</h2>
        <p className="kona-promise__sub">Four things we hold ourselves to, every time.</p>
      </div>

      <div className="kona-promise__grid">
        {PROMISES.map((p, i) => (
          <article key={p.n} className="kona-promise__card" style={{ '--i': i }}>
            <div className="kona-promise__card-top">
              <span className="kona-promise__num">{p.n}</span>
              <span className="kona-promise__icon"><PromiseIcon type={p.icon}/></span>
            </div>
            <h3 className="kona-promise__title">
              {p.title.split('\n').map((line, j) => (
                <span key={j}>{line}</span>
              ))}
            </h3>
            <p className="kona-promise__detail">{p.detail}</p>
            <div className="kona-promise__card-edge" />
          </article>
        ))}
      </div>
    </section>
  );
}

window.Promise_ = Promise_;
