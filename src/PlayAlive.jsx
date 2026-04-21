/* Section 2: Play That Comes Alive — a 'corner' to 'whole house' visual journey */

function PlayAlive({ vibe }) {
  return (
    <section id="play" className={`kona-play vibe-${vibe}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt=""/>
      </div>
      <div className="kona-play__inner">
        <div className="kona-play__text">
          <span className="kona-eyebrow">02 · Play that comes alive</span>
          <h2 className="kona-play__headline">
            From their little <span className="kona-underline-coral">corner</span>
            <br/>to every <span className="kona-underline-teal">room</span> in the house.
          </h2>
          <p className="kona-play__body">
            It starts quiet. Cross-legged in a patch of afternoon light, pieces
            spread out like a tiny universe. Then — something clicks. And the
            toy that lived in the corner goes running.
          </p>
        </div>

        <div className="kona-play__visual" aria-hidden>
          {/* Three-panel journey: corner → hallway → whole house */}
          <div className="kona-play__frame kona-play__frame--a">
            <div className="kona-play__frame-label">the corner</div>
            <div className="kona-play__scene kona-play__scene--corner">
              <div className="kona-play__window" />
              <div className="kona-play__sunbeam" />
              <div className="kona-play__kid kona-play__kid--sitting">
                <div className="kona-play__kid-body" />
                <div className="kona-play__kid-head" />
              </div>
              <div className="kona-play__pieces">
                <span className="piece p1" />
                <span className="piece p2" />
                <span className="piece p3" />
                <span className="piece p4" />
              </div>
            </div>
          </div>

          <div className="kona-play__arrow">
            <svg viewBox="0 0 80 20" fill="none">
              <path d="M2 10 Q 40 0 78 10" stroke="#1E1E1E" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round"/>
              <path d="M70 5 L78 10 L70 15" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          <div className="kona-play__frame kona-play__frame--b">
            <div className="kona-play__frame-label">the whole house</div>
            <div className="kona-play__scene kona-play__scene--house">
              <div className="kona-play__hallway" />
              <div className="kona-play__door kona-play__door--left" />
              <div className="kona-play__door kona-play__door--right" />
              <div className="kona-play__rug" />
              <div className="kona-play__kid kona-play__kid--running">
                <div className="kona-play__kid-body" />
                <div className="kona-play__kid-head" />
                <div className="kona-play__kid-toy" />
                <div className="kona-play__kid-trail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PlayAlive = PlayAlive;
