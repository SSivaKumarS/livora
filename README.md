# LiveMatch — livora

LiveMatch is a modern **PG & Roommate Finder Web Application** built using **React + Vite + JavaScript + CSS**.  
It helps students and working professionals discover the right PG stay and compatible roommates based on lifestyle preferences, budget, and comfort needs.

---

## Overview

LiveMatch is designed to simplify the PG and roommate search experience with a clean UI, smart filters, comparison tools, and preference-based recommendations.

---

## Features

### Smart PG Search
- Browse PG listings in a responsive card layout
- Search by city, area, rent, gender preference, and amenities
- Sort by price, rating, and popularity
- Filter listings instantly

### Roommate Matching
- Lifestyle quiz for preference-based suggestions
- Match users with similar habits and routines
- Compatibility score results

### Favorites System
- Save preferred PG listings
- Manage wishlist anytime
- Persistent storage with LocalStorage

### Dark Mode
- Light and dark theme toggle
- Theme preference saved automatically

### Compare PGs
- Compare multiple PGs side by side
- View pricing, facilities, ratings, occupancy

### PG Detail Modal
- Full PG information popup
- Facilities and room details
- Contact / enquiry button
- Quick view without page reload

### Responsive UI
- Mobile-first layout
- Tablet and desktop optimized
- Smooth modern interactions

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React JSX | Component-based UI |
| JavaScript | Logic and state management |
| CSS3 | Styling and responsive design |
| React Router DOM | Routing and navigation |
| Vite | Fast development environment |
| LocalStorage | Persist favorites and theme |

---

## Project Structure

```bash
src/
│── assets/

│── components/
│   ├── FilterBar.jsx
│   ├── FilterBar.css
│   ├── Loader.jsx
│   ├── Loader.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── PGCard.jsx
│   ├── PGCard.css
│   ├── RoommateCard.jsx
│   └── RoommateCard.css

│── data/
│   ├── pgData.js
│   └── roommateData.js

│── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Listings.jsx
│   ├── Listings.css
│   ├── Quiz.jsx
│   ├── Quiz.css
│   ├── Results.jsx
│   └── Results.css

│── App.jsx
│── main.jsx
│── index.css