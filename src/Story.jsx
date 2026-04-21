/* Section 4: The Kona Story — Why Kona + Founder's handwritten note */

function Story({ vibe }) {
  return (
    <section id="story" className={`kona-story vibe-${vibe}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt=""/>
      </div>
      <div className="kona-story__part kona-story__part--why">
        <div className="kona-story__why-inner">
          <span className="kona-eyebrow">04 · The Kona story</span>
          <h2 className="kona-story__headline">
            Kona means<br/>
            <span className="kona-story__headline-accent">a little corner.</span>
          </h2>

          <div className="kona-story__play-frames" aria-hidden>
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

          <div className="kona-story__why-copy">
            <p>
              A safe, intimate space where imagination begins. The small world
              children naturally build behind the sofa, under the staircase,
              in that one spot in the house that was entirely <em>theirs</em>.
            </p>
            <p>
              Kona is built on a simple belief: that corner — that feeling —
              deserves a toy worthy of it. Not something that breaks in two
              days. Not something they forget by tomorrow. Something that
              plays with them the way they play with it.
            </p>
            <p className="kona-story__why-kicker">
              From tiny corners, limitless worlds.
            </p>
          </div>
        </div>
      </div>

      <div className="kona-story__part kona-story__part--founder">
        <div className="kona-story__letter">
          <div className="kona-story__letter-tape kona-story__letter-tape--l" />
          <div className="kona-story__letter-tape kona-story__letter-tape--r" />
          <span className="kona-eyebrow kona-eyebrow--ink">A note from the founder</span>
          <div className="kona-story__letter-body">
            <p>
              You know that face a kid makes when they've built something and
              they bring it to you?
            </p>
            <p>
              Like it's the most important thing in the world?
            </p>
            <p className="kona-story__letter-emph">
              That's the whole reason Kona exists.
            </p>
            <p>
              Not to teach them something. Not to tick a box. Just to give
              them that moment — where they made something, it's theirs, and
              they can't wait to show you.
            </p>
            <p>
              I want to build toys that brighten faces. That's it. That's the
              whole thing.
            </p>
            <p>Follow along — this is going to be a fun one.</p>
          </div>
          <div className="kona-story__signature">
            <span className="kona-story__signature-name">Anika</span>
            <span className="kona-story__signature-role">Founder, Kona</span>
          </div>
          <div className="kona-story__photo" aria-hidden>
            <div className="kona-story__photo-placeholder">
              <span>founder</span>
              <span>portrait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Story = Story;
