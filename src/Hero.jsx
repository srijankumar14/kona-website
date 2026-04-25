/* Hero — full-bleed video behind big type with coral tint overlay */

function Hero({ vibe, heroStyle }) {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className={`kona-hero kona-hero--${heroStyle} vibe-${vibe}`}>
      <div className="kona-hero__video-wrap">
        <video
          ref={videoRef}
          className="kona-hero__video"
          src="assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline />
        
        <div className="kona-hero__tint" />
        <div className="kona-hero__vignette" />
      </div>

      <div className="kona-hero__inner">
        <div className="kona-hero__eyebrow">
          <span className="kona-hero__dot" />
          <span>Launching Summer 2026</span>
        </div>

        <h1 className="kona-hero__title">
          <span className="kona-hero__title-line-1" style={{ fontFamily: "\"Instrument Serif\"" }}>little worlds</span>
          <span className="kona-hero__title-line-2" style={{ fontWeight: "300" }}>for little hands</span>
        </h1>

        <p className="kona-hero__lede">
          Every piece has a place.<br />
          <em>The last one has a heartbeat.</em>
        </p>

        <div className="kona-hero__actions">
          <a href="#waitlist" className="kona-btn kona-btn--cream">
            Join the waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#worlds" className="kona-btn kona-btn--ghost">
            Peek inside
          </a>
        </div>

        <div className="kona-hero__scroll-hint">
          <span>scroll</span>
          <svg width="10" height="22" viewBox="0 0 10 22" fill="none" aria-hidden>
            <path d="M5 2v16M1.5 14.5L5 18l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* decorative stars + corner */}
      <svg className="kona-hero__star kona-hero__star--a" viewBox="0 0 40 40" aria-hidden>
        <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="#F5B731" />
      </svg>
      <svg className="kona-hero__star kona-hero__star--b" viewBox="0 0 40 40" aria-hidden>
        <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="#FFE9A8" />
      </svg>
    </section>);

}

window.Hero = Hero;