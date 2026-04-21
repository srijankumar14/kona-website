/* Sticky nav that shrinks on scroll */

function Nav({ vibe }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Our Toys', href: '#worlds' },
    { label: 'How It Works', href: '#play' },
    { label: 'Our Story', href: '#story' },
  ];

  return (
    <nav className={`kona-nav ${scrolled ? 'is-scrolled' : ''} vibe-${vibe}`}>
      <a href="#top" className="kona-nav__logo" aria-label="Kona home">
        <img src="assets/kona-logo.png" alt="Kona" />
      </a>
      <div className="kona-nav__links">
        {links.map(l => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <a href="#waitlist" className="kona-nav__cta">
        Join the waitlist
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </nav>
  );
}

window.Nav = Nav;
