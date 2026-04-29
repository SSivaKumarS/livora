import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Quiz.css'

const QUESTIONS = [
  {
    id: 'sleep',
    question: 'What\'s your sleep schedule?',
    emoji: '🌙',
    options: [
      { value: 'early', label: 'Early Bird', desc: 'Asleep by 10 PM, up at 6 AM' },
      { value: 'late', label: 'Night Owl', desc: 'Up past midnight, late riser' },
    ],
  },
  {
    id: 'cleanliness',
    question: 'How do you keep your shared spaces?',
    emoji: '🧹',
    options: [
      { value: 'high', label: 'Spotless', desc: 'Everything has a place' },
      { value: 'medium', label: 'Reasonably tidy', desc: 'Clean when needed' },
      { value: 'low', label: 'Relaxed', desc: 'A little mess is fine' },
    ],
  },
  {
    id: 'social',
    question: 'How would you describe your social style?',
    emoji: '🧠',
    options: [
      { value: 'introvert', label: 'Introvert', desc: 'My room is my sanctuary' },
      { value: 'extrovert', label: 'Extrovert', desc: 'Love having people over' },
      { value: 'ambivert', label: 'Ambivert', desc: 'Depends on my mood!' },
    ],
  },
  {
    id: 'food',
    question: 'What are your food preferences?',
    emoji: '🍽️',
    options: [
      { value: 'veg', label: 'Vegetarian', desc: 'Strictly veg kitchen' },
      { value: 'nonveg', label: 'Non-Veg', desc: 'I eat everything' },
      { value: 'any', label: 'No preference', desc: 'Whatever works' },
    ],
  },
  {
    id: 'work',
    question: 'What best describes your situation?',
    emoji: '💼',
    options: [
      { value: 'student', label: 'Student', desc: 'College / university' },
      { value: 'job', label: 'Working Professional', desc: 'Office-based job' },
      { value: 'remote', label: 'Remote Worker', desc: 'Work from anywhere' },
    ],
  },
  {
    id: 'noise',
    question: 'How sensitive are you to noise?',
    emoji: '🔊',
    options: [
      { value: 'low', label: 'Need quiet', desc: 'Silence is golden' },
      { value: 'high', label: 'Noise-tolerant', desc: 'Music and chatter are fine' },
    ],
  },
]

function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const current = QUESTIONS[step]
  const progress = ((step) / QUESTIONS.length) * 100

  const handleSelect = (value) => {
    setSelected(value)
  }

  const handleNext = () => {
    if (!selected) return
    const newAnswers = { ...answers, [current.id]: selected }
    setAnswers(newAnswers)

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
      setSelected(answers[QUESTIONS[step + 1]?.id] || null)
    } else {
      navigate('/results', { state: { answers: newAnswers } })
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
      setSelected(answers[QUESTIONS[step - 1].id] || null)
    }
  }

  return (
    <main className="quiz page-enter">
      <div className="quiz__bg">
        <div className="quiz__bg-circle quiz__bg-circle--1" />
        <div className="quiz__bg-circle quiz__bg-circle--2" />
      </div>

      <div className="container quiz__container">
        {/* Progress */}
        <div className="quiz__progress-wrap">
          <div className="quiz__step-label">
            Step {step + 1} of {QUESTIONS.length}
          </div>
          <div className="quiz__progress-bar">
            <div
              className="quiz__progress-fill"
              style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
          <div className="quiz__progress-pct">
            {Math.round(((step + 1) / QUESTIONS.length) * 100)}%
          </div>
        </div>

        {/* Card */}
        <div className="quiz__card" key={step}>
          <div className="quiz__emoji">{current.emoji}</div>
          <h2 className="quiz__question">{current.question}</h2>

          <div className="quiz__options">
            {current.options.map(({ value, label, desc }) => (
              <button
                key={value}
                className={`quiz__option ${selected === value ? 'quiz__option--selected' : ''}`}
                onClick={() => handleSelect(value)}
              >
                <div className="quiz__option-check">
                  {selected === value ? '✓' : ''}
                </div>
                <div className="quiz__option-content">
                  <span className="quiz__option-label">{label}</span>
                  <span className="quiz__option-desc">{desc}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="quiz__nav">
            <button
              className="quiz__back"
              onClick={handleBack}
              disabled={step === 0}
            >
              ← Back
            </button>
            <button
              className={`btn-primary quiz__next ${!selected ? 'quiz__next--disabled' : ''}`}
              onClick={handleNext}
              disabled={!selected}
            >
              {step === QUESTIONS.length - 1 ? 'See My Matches 🎯' : 'Next →'}
            </button>
          </div>
        </div>

        {/* Step dots */}
        <div className="quiz__dots">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`quiz__dot ${i === step ? 'quiz__dot--active' : ''} ${i < step ? 'quiz__dot--done' : ''}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Quiz
