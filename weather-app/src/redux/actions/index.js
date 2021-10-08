

export const fetchResultsAction = (query, searchType) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: "LOADING",
          payload: true,
        });

        // console.log(query)
  
        const responseCurrent = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&cnt=7&appid=${process.env.REACT_APP_BE_URL}`,
        //   {
        //     headers: {
        //       Authorization:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk",
        //     },
        //   }
        );
        const response5day = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&cnt=7&appid=${process.env.REACT_APP_BE_URL}`,
      //   {
      //     headers: {
      //       Authorization:
      //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk",
      //     },
      //   }
      );
        if (response5day.ok && responseCurrent.ok) {
          // const fetched = await response.json();
          const fetched5day = await response5day.json()
          const fetchedCurrent = await responseCurrent.json()

          const resultArray = [...getState().search.mainCityLocations]

          const LocationData = {
            "fiveDay": fetched5day,
            "Current": fetchedCurrent
          }



          if (resultArray.length < 5){
            resultArray.push(LocationData)
          }
          
          console.log(LocationData)
          console.log(resultArray)


          
          switch (searchType) {
            case "search":
              dispatch({
                type: "CITY_WEATHER_RESULT",
                payload: LocationData,
              });
              break;
            case "main":
              dispatch({
                type: "MAIN_CITIES",
                payload: resultArray,
              });
              break;
            // case "limit=10&":
            //   dispatch({
            //     type: "ALL_JOBS",
            //     payload: fetchedContent,
            //   });
            //   break;
  
          //   default:
          //     dispatch({
          //       type: FILL_SEARCH,
          //       payload: fetchedContent,
          //     });
          //     break;
          }
  
          dispatch({
            type: "ERROR",
            payload: false,
          });
          dispatch({
            type: "LOADING",
            payload: false,
          });
        } else {
          dispatch({
            type: "ERROR",
            payload: true,
          });
          dispatch({
            type: "LOADING",
            payload: false,
          });
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: true,
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
      }
    };
  };
  
  export const addToFavAction = (query) => ({
    type: "ADD_TO_FAV",
    payload: query,
  });
  
  export const removeFromFavAction = (query) => ({
    type: "REMOVE_FROM_FAV",
    payload: query,
  });
  
  export const setUsernameAction = (name) => ({
    type: 'SET_USERNAME',
    payload: name,
  })

  export const setSearchQuery = (query) => ({
    type: 'QUERY',
    payload: query,
  })