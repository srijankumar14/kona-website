/* Section 4: The Kona Story */

function Story({ vibe }) {
  return (
    <section id="story" className={`kona-story vibe-${vibe}`}>
      <div className="kona-corner-mark" aria-hidden>
        <img src="assets/kona-logo.png" alt="" />
      </div>

      {/* Part 1 — Why Kona: simple two-col */}
      <div className="kona-story__why">
        <div className="kona-story__why-left">
          <span className="kona-eyebrow">03 · THE KONA STORY</span>
          <h2 className="kona-story__headline">
            Kona means<br/>
            <span className="kona-story__headline-accent">a little corner.</span>
          </h2>
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

        <div className="kona-story__why-right" aria-hidden>
          <img
            src="assets/child-drawing.png"
            alt="A child drawing in their corner"
            className="kona-story__why-img"
          />
        </div>
      </div>

      {/* Part 2 — Founder letter */}
      <div className="kona-story__part kona-story__part--founder">
        <div className="kona-story__letter">
          <span className="kona-eyebrow kona-eyebrow--ink">A note from the founder</span>
          <div className="kona-story__letter-body">
            <div className="kona-story__photo" aria-hidden>
              <div className="kona-story__photo-placeholder">
                <span>founder</span>
                <span>portrait</span>
              </div>
            </div>
            <p>
              You know that face a kid makes when they've built something and
              they bring it to you?
            </p>
            <p>Like it's the most important thing in the world?</p>
            <p className="kona-story__letter-emph">
              That's the whole reason Kona exists.
            </p>
            <p>Not to teach them something. Not to tick a box. Just to give them that moment — where they made something, it's theirs, and they can't wait to show you.</p>
            <p>We want to build toys that brighten faces. That's it. That's the whole thing.</p>
            <p>Follow along — this is going to be a fun one.</p>
          </div>
          <div className="kona-story__signature">
            <span className="kona-story__signature-name">Anika</span>
            <span className="kona-story__signature-role">Founder, Kona</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Story = Story;
