import './PGCard.css'

const TAG_CLASSES = {
  'Silent Zone': 'tag-silent',
  'Study Focused': 'tag-study',
  'Party Friendly': 'tag-party',
  'Verified': 'tag-verified',
  'Trending PG': 'tag-trending',
  'Gen Z Friendly': 'tag-genz',
  'VIP Stay': 'tag-vip',
}

const BADGE_ICONS = {
  'Verified': '✓',
  'Trending PG': '🔥',
  'Gen Z Friendly': '⚡',
  'VIP Stay': '★',
}

function PGCard({ pg }) {
  const { name, rent, location, tags, badges, facilities, image, rating, available } = pg

  return (
    <div className={`pg-card ${!available ? 'pg-card--unavailable' : ''}`}>
      <div className="pg-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="pg-card__image"
          loading="lazy"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80' }}
        />
        {!available && <div className="pg-card__unavailable-overlay">Coming Soon</div>}
        <div className="pg-card__badges">
          {badges?.slice(0, 2).map(badge => (
            <span key={badge} className={`pg-card__badge tag ${TAG_CLASSES[badge] || 'tag-verified'}`}>
              {BADGE_ICONS[badge]} {badge}
            </span>
          ))}
        </div>
        <div className="pg-card__rating">
          <span>★</span> {rating}
        </div>
      </div>

      <div className="pg-card__body">
        <h3 className="pg-card__name">{name}</h3>
        <p className="pg-card__location">
          <span className="pg-card__location-icon">📍</span>
          {location}
        </p>

        <div className="pg-card__tags">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className={`tag ${TAG_CLASSES[tag] || 'tag-verified'}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="pg-card__facilities">
          {facilities.slice(0, 4).map(f => (
            <span key={f} className="pg-card__facility">{f}</span>
          ))}
          {facilities.length > 4 && <span className="pg-card__facility">+{facilities.length - 4}</span>}
        </div>

        <div className="pg-card__footer">
          <div className="pg-card__rent">
            <span className="pg-card__rent-amount">₹{rent.toLocaleString()}</span>
            <span className="pg-card__rent-unit">/mo</span>
          </div>
          <button className="btn-primary pg-card__cta">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default PGCard
