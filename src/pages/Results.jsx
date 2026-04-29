import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import RoommateCard from '../components/RoommateCard'
import PGCard from '../components/PGCard'
import Loader from '../components/Loader'
import { roommateData } from '../data/roommateData'
import { pgData } from '../data/pgData'
import './Results.css'

function computeScore(answers) {
  // Simple mock scoring: count filled answers and randomize slightly
  const filled = Object.keys(answers || {}).length
  const base = Math.min(60 + filled * 5, 95)
  return base + Math.floor(Math.random() * 5)
}

function getMatchedPGs(answers) {
  if (!answers) return pgData.slice(0, 3)
  return pgData
    .filter(pg => {
      if (answers.social === 'introvert') return pg.tags.includes('Silent Zone')
      if (answers.social === 'extrovert') return pg.tags.includes('Party Friendly')
      return true
    })
    .slice(0, 3)
}

function getMatchedRoommates(answers) {
  if (!answers) return roommateData.slice(0, 3)
  return [...roommateData]
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3)
}

function Results() {
  const location = useLocation()
  const answers = location.state?.answers || {}
  const [loading, setLoading] = useState(true)
  const [score] = useState(() => computeScore(answers))
  const [tab, setTab] = useState('roommates')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  const matchedRoommates = getMatchedRoommates(answers)
  const matchedPGs = getMatchedPGs(answers)

  const scoreColor = score >= 85 ? '#3A7A3A' : score >= 70 ? '#C4622D' : '#8A8278'
  const circumference = 2 * Math.PI * 52

  if (loading) {
    return (
      <main className="results-loading page-enter">
        <Loader message="Analyzing your lifestyle profile…" />
        <p className="results-loading__sub">Matching you with compatible roommates & PGs</p>
      </main>
    )
  }

  return (
    <main className="results page-enter">
      <div className="container">
        {/* Hero Score */}
        <section className="results__hero">
          <div className="results__score-wrap">
            <svg className="results__score-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--cream-dark)" strokeWidth="8" />
              <circle
                cx="60" cy="60" r="52"
                fill="none"
                stroke={scoreColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (circumference * score) / 100}
                transform="rotate(-90 60 60)"
                className="results__score-arc"
              />
              <text x="60" y="56" textAnchor="middle" className="results__score-num" fill={scoreColor}>{score}%</text>
              <text x="60" y="74" textAnchor="middle" className="results__score-label-svg" fill="var(--warm-gray)">Match</text>
            </svg>
          </div>
          <div className="results__hero-text">
            <h1 className="results__title">Your Lifestyle Profile is Ready!</h1>
            <p className="results__subtitle">
              Based on your quiz answers, we found highly compatible roommates and PGs that match your vibe.
            </p>
            <div className="results__pills">
              {Object.entries(answers).map(([key, val]) => (
                <span key={key} className="results__pill">
                  <span className="results__pill-key">{key}</span>
                  {val}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="results__tabs">
          <button
            className={`results__tab ${tab === 'roommates' ? 'results__tab--active' : ''}`}
            onClick={() => setTab('roommates')}
          >
            🤝 Matched Roommates
            <span className="results__tab-count">{matchedRoommates.length}</span>
          </button>
          <button
            className={`results__tab ${tab === 'pgs' ? 'results__tab--active' : ''}`}
            onClick={() => setTab('pgs')}
          >
            🏠 Recommended PGs
            <span className="results__tab-count">{matchedPGs.length}</span>
          </button>
        </div>

        {/* Roommates */}
        {tab === 'roommates' && (
          <section className="results__section">
            <div className="results__grid results__grid--roommates">
              {matchedRoommates.map(rm => (
                <RoommateCard key={rm.id} roommate={rm} showScore={true} />
              ))}
            </div>
            <div className="results__cta-row">
              <p className="results__cta-note">Want more matches?</p>
              <Link to="/listings" className="btn-primary">Browse All PGs →</Link>
            </div>
          </section>
        )}

        {/* PGs */}
        {tab === 'pgs' && (
          <section className="results__section">
            <div className="results__grid results__grid--pgs">
              {matchedPGs.map(pg => (
                <PGCard key={pg.id} pg={pg} />
              ))}
            </div>
            <div className="results__cta-row">
              <p className="results__cta-note">Not satisfied? See all listings.</p>
              <Link to="/listings" className="btn-primary">All Listings →</Link>
            </div>
          </section>
        )}

        {/* Retake */}
        <div className="results__retake">
          <Link to="/quiz" className="btn-secondary">Retake Quiz</Link>
        </div>
      </div>
    </main>
  )
}

export default Results
