import React from 'react';
import { useSelector } from 'react-redux';
import LaunchCard from './LaunchCard';
import LaunchModal from './LaunchModal';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const PAGE_SIZE = 10;

function LaunchList({ filter, page, setPage }) {
  const launches = useSelector(state => state.upcoming);
  const selected = useSelector(state => state.selected);

  const filteredLaunches = filter
    ? launches.filter(launch =>
        launch.name.toLowerCase().includes(filter)
      )
    : launches;

  const totalPages = Math.ceil(filteredLaunches.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const paginatedLaunches = filteredLaunches.slice(startIdx, startIdx + PAGE_SIZE);

  const handlePrev = () => setPage(page > 1 ? page - 1 : 1);
  const handleNext = () => setPage(page < totalPages ? page + 1 : totalPages);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedLaunches.map(launch => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
        {selected && <LaunchModal launch={selected} />}
      </div>
      {totalPages > 1 && (
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={handlePrev}
            disabled={page === 1}
            style={{
              opacity: page === 1 ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5em 1em'
            }}
            aria-label="Previous Page"
          >
            <ChevronLeft size={20} />
          </button>
          <span style={{ alignSelf: 'center', color: '#8b5cf6', fontWeight: 600 }}>
           {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            style={{
              opacity: page === totalPages ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5em 1em'
            }}
            aria-label="Next Page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}

export default LaunchList;