import './RoommateCard.css'

function RoommateCard({ roommate, showScore = true }) {
  const { name, age, personality, occupation, lifestyle, matchScore, avatar, bio } = roommate

  const scoreColor = matchScore >= 85 ? '#3A7A3A' : matchScore >= 70 ? '#C4622D' : '#8A8278'

  return (
    <div className="roommate-card">
      <div className="roommate-card__header">
        <div className="roommate-card__avatar-wrap">
          <img
            src={avatar}
            alt={name}
            className="roommate-card__avatar"
            loading="lazy"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' }}
          />
          <span className={`roommate-card__personality roommate-card__personality--${personality.toLowerCase()}`}>
            {personality}
          </span>
        </div>

        <div className="roommate-card__info">
          <h3 className="roommate-card__name">{name}, {age}</h3>
          <p className="roommate-card__occupation">{occupation}</p>
          {showScore && (
            <div className="roommate-card__score-wrap">
              <div className="roommate-card__score-bar">
                <div
                  className="roommate-card__score-fill"
                  style={{ width: `${matchScore}%`, background: scoreColor }}
                />
              </div>
              <span className="roommate-card__score-text" style={{ color: scoreColor }}>
                {matchScore}% Match
              </span>
            </div>
          )}
        </div>
      </div>

      <p className="roommate-card__bio">{bio}</p>

      <div className="roommate-card__tags">
        {lifestyle.map(tag => (
          <span key={tag} className="roommate-card__tag">{tag}</span>
        ))}
      </div>

      <button className="btn-secondary roommate-card__cta">Connect</button>
    </div>
  )
}

export default RoommateCard
