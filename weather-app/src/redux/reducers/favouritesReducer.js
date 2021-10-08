import initialState from '../initialstate';

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_TO_FAV" : 
    return {
      ...state,
      locations: [
        ...state.locations,
        action.payload
      ]
    }
    case "REMOVE_FROM_FAV" :
      return {
        ...state,
        locations: 
          state.locations.filter(
            (l) => l._id !== action.payload._id 
          )
        // Replacing state as an Array from filter
      }
    default:
      return state;
  }
};

export default favouritesReducer;

