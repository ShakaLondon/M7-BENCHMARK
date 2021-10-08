const initialState = {
    favourites: {
      locations: [],
    },
    search: {
      searchQuery: "",
      searchResults: [],
      mainCityLocations: [],
      loading: false,
      error: false,
    },
    user: {
      firstName: ''
    }
  }
  
  export default initialState
  