import './FilterBar.css'

const SPECIAL_FILTERS = [
  { key: 'boys', label: '👦 Boys Only' },
  { key: 'girls', label: '👧 Girls Only' },
  { key: 'couples', label: '💑 Couples' },
  { key: 'singles', label: '🧍 Singles' },
  { key: 'family', label: '👨‍👩‍👧 Family' },
  { key: 'vip', label: '★ VIP Stays' },
  { key: 'it-employees', label: '💻 IT/Team' },
  { key: 'hotel-type', label: '🏨 Hotel Type' },
]

function FilterBar({ filters, setFilters }) {
  const handlePriceChange = (e) => {
    setFilters(f => ({ ...f, maxPrice: Number(e.target.value) }))
  }

  const handleSelectChange = (key) => (e) => {
    setFilters(f => ({ ...f, [key]: e.target.value }))
  }

  const toggleSpecial = (key) => {
    setFilters(f => {
      const current = f.specialTypes || []
      const updated = current.includes(key)
        ? current.filter(k => k !== key)
        : [...current, key]
      return { ...f, specialTypes: updated }
    })
  }

  const resetFilters = () => {
    setFilters({ maxPrice: 35000, food: 'all', room: 'all', specialTypes: [] })
  }

  return (
    <div className="filter-bar">
      <div className="filter-bar__top">
        <h3 className="filter-bar__title">Filters</h3>
        <button className="filter-bar__reset" onClick={resetFilters}>Reset All</button>
      </div>

      <div className="filter-bar__section">
        <label className="filter-bar__label">
          Max Rent
          <span className="filter-bar__value">₹{filters.maxPrice?.toLocaleString()}/mo</span>
        </label>
        <input
          type="range"
          min={5000}
          max={35000}
          step={500}
          value={filters.maxPrice || 35000}
          onChange={handlePriceChange}
          className="filter-bar__range"
        />
        <div className="filter-bar__range-labels">
          <span>₹5K</span>
          <span>₹35K</span>
        </div>
      </div>

      <div className="filter-bar__section">
        <label className="filter-bar__label">Food Type</label>
        <select
          value={filters.food || 'all'}
          onChange={handleSelectChange('food')}
          className="filter-bar__select"
        >
          <option value="all">All</option>
          <option value="veg">Veg Only</option>
          <option value="nonveg">Non-Veg</option>
        </select>
      </div>

      <div className="filter-bar__section">
        <label className="filter-bar__label">Room Type</label>
        <select
          value={filters.room || 'all'}
          onChange={handleSelectChange('room')}
          className="filter-bar__select"
        >
          <option value="all">All Types</option>
          <option value="single">Single Room</option>
          <option value="shared">Shared Room</option>
        </select>
      </div>

      <div className="filter-bar__section">
        <label className="filter-bar__label">Stay Type</label>
        <div className="filter-bar__chips">
          {SPECIAL_FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-bar__chip ${filters.specialTypes?.includes(key) ? 'filter-bar__chip--active' : ''}`}
              onClick={() => toggleSpecial(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterBar
