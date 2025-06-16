import React from 'react';
import { useSelector } from 'react-redux';
import LaunchCard from './LaunchCard';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function InterestedPage() {
  const launches = useSelector(state => state.upcoming);
  const interestedIds = useSelector(state => state.interested);
  const interestedLaunches = launches.filter(launch => interestedIds.includes(launch.id));

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', color: '#8b5cf6', textDecoration: 'none', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Home
      </Link>
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-500 drop-shadow">🌟 Interested Launches</h1>
      {interestedLaunches.length === 0 ? (
        <div className="glass-card">No interested launches yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interestedLaunches.map(launch => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      )}
    </div>
  );
}

export default InterestedPage;