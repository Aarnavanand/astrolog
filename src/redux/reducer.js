import {
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
  TOGGLE_INTERESTED,
  SELECT_LAUNCH,
  CLEAR_SELECTED
} from './action';

const initialState = {
  upcoming: [],
  error: null,
  interested: [],
  selected: null
};

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_SUCCESS:
      return { ...state, upcoming: action.payload };
    case FETCH_LAUNCHES_FAILURE:
      return { ...state, error: action.payload };
    case TOGGLE_INTERESTED:
      const id = action.payload;
      return {
        ...state,
        interested: state.interested.includes(id)
          ? state.interested.filter(i => i !== id)
          : [...state.interested, id]
      };
    case SELECT_LAUNCH:
      return { ...state, selected: action.payload };
    case CLEAR_SELECTED:
      return { ...state, selected: null };
    default:
      return state;
  }
};
 export default reducer;