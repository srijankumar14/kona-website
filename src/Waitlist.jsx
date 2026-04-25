/* Section 6: Waitlist — email + child age + success state with counter */

function Waitlist({ vibe }) {
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | submitting | done
  const [count, setCount] = React.useState(247);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setState('submitting');
    setTimeout(() => {
      setState('done');
      setCount((c) => c + 1);
    }, 700);
  };

  return (
    <section id="waitlist" className={`kona-waitlist vibe-${vibe}`}>
      <div className="kona-waitlist__inner">
        <div className="kona-waitlist__left">
          <span className="kona-eyebrow">06 · First dibs</span>
          <h2 className="kona-waitlist__headline">
            We're almost ready.<br />
            <span className="kona-waitlist__headline-accent">Are you?</span>
          </h2>
          <p className="kona-waitlist__sub">Waitlist families get early access.</p>
        </div>

        <div className="kona-waitlist__right">
          {state !== 'done' ?
          <form className="kona-waitlist__form" onSubmit={onSubmit}>
              <label className="kona-field">
                <span className="kona-field__label">Your email</span>
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@home.com" />
              
              </label>
              <label className="kona-field">
                <span className="kona-field__label">Your child's age <em>(optional)</em></span>
                <select value={age} onChange={(e) => setAge(e.target.value)}>
                  <option value="">Select an age</option>
                  <option>Under 3</option>
                  <option>3–4</option>
                  <option>5–6</option>
                  <option>7–8</option>
                  <option>9+</option>
                </select>
              </label>
              <button type="submit" className="kona-btn kona-btn--cream kona-btn--full" disabled={state === 'submitting'}>
                {state === 'submitting' ? 'Saving your spot…' : 'Join the waitlist'}
                {state !== 'submitting' &&
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              }
              </button>
              <p className="kona-waitlist__legal">
                No spam. Unsubscribe anytime. Just Kona, when we have news.
              </p>
            </form> :

          <div className="kona-waitlist__success">
              <div className="kona-waitlist__success-star">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M20 3 L24 16 L37 20 L24 24 L20 37 L16 24 L3 20 L16 16 Z" fill="#F5B731" />
                </svg>
              </div>
              <h3>You're in.</h3>
              <p>
                We've saved your corner. You'll hear from us when Kona is
                ready — and not a minute before.
              </p>
              <p className="kona-waitlist__success-sig">— Anika & team</p>
            </div>
          }
        </div>
      </div>
    </section>);

}

function Footer({ vibe }) {
  return (
    <footer className={`kona-footer vibe-${vibe}`}>
      <div className="kona-footer__top">
        <div className="kona-footer__mark">
          <img src="assets/kona-logo.png" alt="Kona" />
        </div>
        <p className="kona-footer__tagline">
          Little worlds for little hands. Made with care in India.
        </p>
      </div>
      <div className="kona-footer__bottom">
        <div>© Kona 2026</div>
        <div className="kona-footer__links">
          <a href="#">Instagram @kona_play</a>
          <a href="#">Contact</a>
          <a href="#">kona-store.com</a>
        </div>
      </div>
    </footer>);

}

window.Waitlist = Waitlist;
window.Footer = Footer;