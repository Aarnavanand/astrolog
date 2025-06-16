import React from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_SELECTED } from '../redux/action';

function LaunchModal({ launch }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-all">
      <div className="glass-card p-8 w-[90%] max-w-lg shadow-2xl relative flex flex-col">
        <h2 className="text-2xl font-bold mb-3">{launch.name}</h2>
        <p className="text-base text-slate-200 mb-4">{launch.mission?.description || 'No description available.'}</p>
        <div className="mb-2">
          <span className="font-semibold">🚀 Provider:</span> {launch.launch_service_provider?.name}
        </div>
        <div>
          <span className="font-semibold">🕒 Scheduled:</span> {new Date(launch.net).toLocaleString()}
        </div>
        <button
          onClick={() => dispatch({ type: CLEAR_SELECTED })}
          className="mt-8 self-end text-gray-400 hover:text-red-500 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default LaunchModal;
