import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_LAUNCH, TOGGLE_INTERESTED } from '../redux/action';

function LaunchCard({ launch }) {
  const dispatch = useDispatch();
  const interested = useSelector(state => state.interested.includes(launch.id));

  return (
    <div className="glass-card shadow-md p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all">
      <h2 className="text-lg font-semibold mb-1">{launch.name}</h2>
      <p className="text-xs text-gray-500 mb-2">{new Date(launch.net).toLocaleString()}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xs">{launch.launch_service_provider?.name}</span>
      </div>
      <div className="flex justify-between items-center mt-4 gap-x-3">
        <button
          onClick={() => dispatch({ type: TOGGLE_INTERESTED, payload: launch.id })}
          className={`text-sm px-3 py-1 rounded-full font-medium transition-all ${interested ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-700'}`}
        >
          {interested ? 'Interested ✅' : 'Interested ❌'}
        </button>
        <button
          onClick={() => dispatch({ type: SELECT_LAUNCH, payload: launch })}
          className=""
        >
          Details
        </button>
      </div>

    </div>
  );
}

export default LaunchCard;