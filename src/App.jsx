import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_LAUNCHES_SUCCESS, FETCH_LAUNCHES_FAILURE } from './redux/action';
import getLaunches from './components/launchApi';
import LaunchList from './components/LaunchList';
import FilterPanel from './components/FilterPanel';
import { Route, Routes, Link } from 'react-router-dom';
import InterestedPage from './components/InterestedPage';
import { MousePointer } from 'lucide-react';
import './App.css';

function Home({ filter, setFilter, page, setPage }) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-500 drop-shadow">🚀 AstroLog - Live Launch Tracker</h1>
      <FilterPanel setFilter={setFilter} />
      <LaunchList filter={filter} page={page} setPage={setPage} />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const interestedCount = useSelector(state => state.interested.length);

  useEffect(() => {
    getLaunches()
      .then(res => dispatch({ type: FETCH_LAUNCHES_SUCCESS, payload: res.data.results }))
      .catch(err => dispatch({ type: FETCH_LAUNCHES_FAILURE, payload: err.message }));
  }, []);

  return (
    <div>
      <Link to="/interested" style={{ position: 'fixed', top: 24, right: 32, zIndex: 100 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <MousePointer size={32} color="#facc15" fill={interestedCount > 0 ? "#facc15" : "none"} />
          {interestedCount > 0 && (
            <span style={{
              position: 'absolute',
              top: -8,
              right: -8,
              background: '#8b5cf6',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: 13,
              fontWeight: 700,
              border: '2px solid #fff',
              boxShadow: '0 2px 8px rgba(139,92,246,0.15)'
            }}>
              {interestedCount}
            </span>
          )}
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Home filter={filter} setFilter={setFilter} page={page} setPage={setPage} />} />
        <Route path="/interested" element={<InterestedPage />} />
      </Routes>
    </div>
  );
}

export default App;
