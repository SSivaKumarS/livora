import { useState, useMemo } from 'react'
import PGCard from '../components/PGCard'
import FilterBar from '../components/FilterBar'
import Loader from '../components/Loader'
import { pgData } from '../data/pgData'
import './Listings.css'

const SORT_OPTIONS = [
  { value: 'default', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const DEFAULT_FILTERS = {
  maxPrice: 35000,
  food: 'all',
  room: 'all',
  specialTypes: [],
}

function Listings() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [sort, setSort] = useState('default')
  const [search, setSearch] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = pgData.filter(pg => {
      // Price
      if (pg.rent > filters.maxPrice) return false
      // Search
      if (search) {
        const q = search.toLowerCase()
        if (!pg.name.toLowerCase().includes(q) && !pg.location.toLowerCase().includes(q)) return false
      }
      // Special type chips
      if (filters.specialTypes && filters.specialTypes.length > 0) {
        const match = filters.specialTypes.some(t => pg.type.includes(t))
        if (!match) return false
      }
      return true
    })

    // Sort
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.rent - b.rent)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.rent - a.rent)
    else if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)

    return list
  }, [filters, sort, search])

  return (
    <main className="listings page-enter">
      <div className="listings__header-wrap">
        <div className="container listings__header">
          <div>
            <h1 className="listings__title">PG Listings</h1>
            <p className="listings__subtitle">
              {filtered.length} verified PGs found across Bangalore
            </p>
          </div>

          <div className="listings__controls">
            <div className="listings__search-wrap">
              <span className="listings__search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search by name or location…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="listings__search"
              />
              {search && (
                <button className="listings__search-clear" onClick={() => setSearch('')}>✕</button>
              )}
            </div>

            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="listings__sort"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>

            <button
              className={`listings__filter-toggle ${filterOpen ? 'listings__filter-toggle--active' : ''}`}
              onClick={() => setFilterOpen(v => !v)}
            >
              ⚙ Filters {filters.specialTypes.length > 0 && (
                <span className="listings__filter-badge">{filters.specialTypes.length}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container listings__body">
        {/* Sidebar (desktop) + mobile drawer */}
        <aside className={`listings__sidebar ${filterOpen ? 'listings__sidebar--open' : ''}`}>
          <div className="listings__sidebar-backdrop" onClick={() => setFilterOpen(false)} />
          <div className="listings__sidebar-panel">
            <div className="listings__sidebar-header">
              <span>Filters</span>
              <button onClick={() => setFilterOpen(false)} className="listings__sidebar-close">✕</button>
            </div>
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>
        </aside>

        <div className="listings__main">
          {filtered.length === 0 ? (
            <div className="listings__empty">
              <div className="listings__empty-icon">🔍</div>
              <h3>No listings found</h3>
              <p>Try adjusting your filters or increasing the price range.</p>
              <button
                className="btn-primary"
                onClick={() => { setFilters(DEFAULT_FILTERS); setSearch('') }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="listings__grid">
              {filtered.map(pg => (
                <PGCard key={pg.id} pg={pg} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Listings
