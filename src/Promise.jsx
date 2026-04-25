/* Section 5: The Kona Promise — illustrated split layout */

const PROMISES = [
  {
    n: '01',
    title: 'Played with, not just played once',
    detail: 'Toys built for the long haul — weighty, made to survive bedtime battles and breakfast reunions.',
    color: '#4A8C6A',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="44" height="44">
        <path d="M22 36 C12 36 6 28 6 22 C6 16 10 10 22 8 C34 10 38 16 38 22 C38 28 32 36 22 36Z" stroke="#4A8C6A" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeDasharray="2 1.5"/>
        <path d="M15 22 Q 22 28 29 22" stroke="#4A8C6A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="16" cy="18" r="1.5" fill="#4A8C6A"/>
        <circle cx="28" cy="18" r="1.5" fill="#4A8C6A"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Fun first. Everything else follows.',
    detail: 'Joy comes first. The learning sneaks in quietly — through building, breaking, and building again.',
    color: '#C97356',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="44" height="44">
        <path d="M22 6 L25 16 L36 16 L27 23 L30 34 L22 27 L14 34 L17 23 L8 16 L19 16 Z" stroke="#C97356" strokeWidth="1.8" strokeLinejoin="round" fill="none" strokeDasharray="2 1.5"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Simple to start. Surprising to stay.',
    detail: 'Easy enough at three. Interesting enough to still surprise at eight.',
    color: '#4A8C6A',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="44" height="44">
        <rect x="10" y="10" width="24" height="24" rx="5" stroke="#4A8C6A" strokeWidth="1.8" strokeDasharray="2 1.5" fill="none"/>
        <rect x="16" y="16" width="12" height="12" rx="3" stroke="#4A8C6A" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Something worth showing you.',
    detail: "The kind of finish line that ends with a small face saying, 'Look!'",
    color: '#C97356',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="44" height="44">
        <circle cx="22" cy="14" r="5" stroke="#C97356" strokeWidth="1.8" fill="none" strokeDasharray="2 1.5"/>
        <path d="M22 19 L22 30" stroke="#C97356" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 26 Q 22 36 30 26" stroke="#C97356" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M14 38 Q 22 42 30 38" stroke="#C97356" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

function Promise_({ vibe }) {
  return (
    <section id="promise" className={`kona-promise vibe-${vibe}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt="" />
      </div>

      <div className="kona-promise__layout">
        {/* Left — full illustration */}
        <div className="kona-promise__left">
          <img
            src="assets/promise-clean.png"
            alt="A child playing with toys"
            className="kona-promise__img"
          />
        </div>

        {/* Right — header + list */}
        <div className="kona-promise__right">
          <span className="kona-eyebrow">04 · Our word on it</span>
          <h2 className="kona-promise__headline">
            The Kona<br/>Promise
          </h2>
          <p className="kona-promise__sub">Four things we hold ourselves to, every time.</p>

          <ol className="kona-promise__list">
            {PROMISES.map((p) => (
              <li key={p.n} className="kona-promise__item">
                <div className="kona-promise__item-badge" style={{ '--p-color': p.color }}>
                  {p.icon}
                </div>
                <div className="kona-promise__item-body">
                  <div className="kona-promise__item-num">{p.n}</div>
                  <h3 className="kona-promise__item-title">{p.title}</h3>
                  <p className="kona-promise__item-detail">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

window.Promise_ = Promise_;
