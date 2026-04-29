import { Link } from 'react-router-dom'
import './Home.css'

const FEATURES = [
  {
    icon: '🧬',
    title: 'Lifestyle Matching',
    desc: 'We go beyond rent and location. Match based on sleep habits, cleanliness, food preferences, and social energy.',
    color: '#FDE8D8',
  },
  {
    icon: '🤝',
    title: 'Smart Roommate Suggestions',
    desc: 'Our algorithm surfaces compatible roommates based on your quiz answers, so you never have to compromise.',
    color: '#E8F4E8',
  },
  {
    icon: '✅',
    title: 'Verified PG Listings',
    desc: 'Every listing is manually reviewed. See real photos, real facilities, and transparent pricing upfront.',
    color: '#E8EEF8',
  },
]

const STATS = [
  { value: '2,400+', label: 'Verified PGs' },
  { value: '18,000+', label: 'Happy Tenants' },
  { value: '94%', label: 'Match Success' },
  { value: '12+', label: 'Cities' },
]

const TESTIMONIALS = [
  {
    text: 'Found my perfect roommate within 3 days. We matched on literally every lifestyle point!',
    name: 'Sneha R.',
    role: 'Software Engineer, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    text: 'The quiz is so accurate. I got matched with a PG that felt like home from day one.',
    name: 'Aditya M.',
    role: 'MBA Student, Pune',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    text: 'Finally a platform that understands I need quiet hours and a clean kitchen!',
    name: 'Kavya P.',
    role: 'UX Designer, Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
]

function Home() {
  return (
    <main className="home page-enter">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">🏠 livora</span>
            <h1 className="hero__headline">
              Find the Right PG,<br />
              <em>Not Just a Room</em>
            </h1>
            <p className="hero__subtext">
              Stop scrolling generic listings. Answer a short quiz about your lifestyle and we'll surface PGs and roommates who genuinely match your vibe — sleep schedule, cleanliness standards, food habits, and more.
            </p>
            <div className="hero__ctas">
              <Link to="/quiz" className="btn-primary hero__cta-primary">
                Get Started →
              </Link>
              <Link to="/listings" className="btn-secondary">
                Browse Listings
              </Link>
            </div>
            <div className="hero__social-proof">
              <div className="hero__avatars">
                {['photo-1494790108377-be9c29b29330', 'photo-1507003211169-0a1dd7228f2d', 'photo-1438761681033-6461ffad8d80'].map((id, i) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/${id}?w=48&q=80`}
                    alt="user"
                    style={{ zIndex: 3 - i }}
                  />
                ))}
              </div>
              <span>Joined by <strong>18,000+</strong> tenants this year</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                alt="Modern PG room"
                className="hero__img"
              />
              <div className="hero__card hero__card--match">
                <span className="hero__card-icon">✨</span>
                <div>
                  <strong>92% Match</strong>
                  <p>with The Nest, Koramangala</p>
                </div>
              </div>
              <div className="hero__card hero__card--verified">
                <span>✅ Verified Listing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container stats__grid">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stats__item">
              <span className="stats__value">{value}</span>
              <span className="stats__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="container">
          <div className="features__header">
            <h2 className="section-title">Why LiveMatch?</h2>
            <p className="section-subtitle">
              We built this because we've been there — stuck with the wrong roommate in the wrong PG. Never again.
            </p>
          </div>
          <div className="features__grid">
            {FEATURES.map(({ icon, title, desc, color }) => (
              <div key={title} className="feature-card" style={{ '--card-accent': color }}>
                <div className="feature-card__icon" style={{ background: color }}>
                  {icon}
                </div>
                <h3 className="feature-card__title">{title}</h3>
                <p className="feature-card__desc">{desc}</p>
                <Link to="/quiz" className="feature-card__link">
                  Try it →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title how-it-works__title">How It Works</h2>
          <div className="hiw__steps">
            {[
              { n: '01', title: 'Take the Quiz', desc: 'Answer 6 quick questions about your lifestyle in under 2 minutes.', icon: '📝' },
              { n: '02', title: 'See Your Matches', desc: 'Get a compatibility score with roommates and PG recommendations.', icon: '💡' },
              { n: '03', title: 'Move In Happy', desc: 'Connect with your match and settle into a space that feels like home.', icon: '🎉' },
            ].map(({ n, title, desc, icon }) => (
              <div key={n} className="hiw__step">
                <div className="hiw__step-num">{n}</div>
                <div className="hiw__step-icon">{icon}</div>
                <h3 className="hiw__step-title">{title}</h3>
                <p className="hiw__step-desc">{desc}</p>
              </div>
            ))}
          </div>
          <div className="hiw__cta">
            <Link to="/quiz" className="btn-primary">Start the Quiz →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title testimonials__title">Real Stories</h2>
          <div className="testimonials__grid">
            {TESTIMONIALS.map(({ text, name, role, avatar }) => (
              <div key={name} className="testimonial-card">
                <p className="testimonial-card__text">"{text}"</p>
                <div className="testimonial-card__author">
                  <img src={avatar} alt={name} className="testimonial-card__avatar"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80' }}
                  />
                  <div>
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Ready to Find Your Match?</h2>
            <p className="cta-banner__sub">Takes less than 2 minutes. No signup required.</p>
          </div>
          <Link to="/quiz" className="btn-primary cta-banner__btn">
            Take the Quiz →
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
