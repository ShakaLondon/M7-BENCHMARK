
  import initialState from '../initialstate';

  
  const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
      case "QUERY":
        return {
          ...state,
          searchQuery: action.payload,
        };
      case "CITY_WEATHER_RESULT":
        return {
          ...state,
          searchResults: action.payload,
        };
      case "MAIN_CITIES":
        return {
          ...state,
          mainCityLocations: action.payload,
        };
      case "ERROR":
        return {
          ...state,
          error: action.payload,
        };
      case "LOADING":
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;