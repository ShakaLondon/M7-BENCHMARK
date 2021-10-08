import React, { useState, useEffect } from "react"
import { Button, ListGroup, Card, Container, Row, Col } from "react-bootstrap"
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons'
import { fetchResultsAction, addToFavAction, removeFromFavAction, setSearchQuery } from "../redux/actions/index"


const mapStateToProps = (state) => ({
    favouriteJobs: state?.favourites.locations,
    searchQuery: state.search.searchQuery,
    wfSearch: state.search.searchResults,
    wfMain: state.search.mainCityLocations,
    error: state.search.error,
    loading: state.search.loading,
  });

  const mapDispatchToProps = (dispatch) => ({
    //functions
    fetchResultsAction: (query, searchType) => dispatch(fetchResultsAction(query, searchType)),
    addToFavList: (query) => dispatch(addToFavAction(query)),
    removeFromFavList: (query) => dispatch(removeFromFavAction(query)),
    setSearchQuery: (query) => dispatch(setSearchQuery(query))
  });

const DefaultCity = ({
    favouriteJobs,
    searchQuery,
    wfSearch,
    wfMain,
    error,
    loading,
    fetchResultsAction,
    addToFavList,
    removeFromFavList,
    setSearchQuery,
}) => {

    const [cityArray, setCityArray] = useState([ "London", "New York", "Shanghai", "Paris", "Singapore" ]);
    const [defaultCities, setdefaultCities] = useState([]);
    const [sevenDays, setSevenDays] = useState([ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]);

    

    // const handleChange= (e) => {
    //     // e.preventDefault();
    //     console.log(e.target.value)
    //     setSearch(e.target.value);
    //   }

    // const handleSubmit= (e) => {
    //     e.preventDefault();
    //     fetchResultsAction(search, "search")
    //   }

      useEffect(() => {
        cityArray.forEach((city) => {
            fetchResultsAction(city, "main")})
    }, [])

    // useEffect(() => {
    //     setdefaultCities(wfMain)
    // }, [wfMain])

    // useEffect(() => {
    //     defaultCities?.forEach((city) => {
    //         const weatherInfo = city.list
            
    //         let weatherInfo20 = weatherInfo.filter((element, index) => {
    //             return index % 2 === 0;
    //           })

    //         city.list = [...weatherInfo20]

    //         })

    //     console.log(defaultCities)

    // }, [defaultCities])

    return (
        <Container>
            { (wfMain.length > 0) && (wfMain.map((main, idx) => {
                return(
        <Container key={idx}>
                
        <ListGroup>
           {/* {main.list.map(() => { */}
           <ListGroup.Item className="border-0 px-3">
                <Card style={{ width: '100%', borderRight: "none", borderLeft: "none", borderBottom: "none" }} className="flex-row">
                    <Container className="d-flex px-0">
                        <Row>
                            <Col md={2} className="d-flex align-items-center">
                        <Card.Body className="mx-auto d-block align-items-center pb-0 px-0" >
                            <h2 style={{ textAlign:"left" }} className="pt-2 pb-1 my-0 text-bold text-nowrap">{`${main.Current.name},`}</h2>
                            <h6 style={{ textAlign:"left" }} className="py-0 my-0">{`${main.Current.sys.country}`}</h6>
                        </Card.Body>
                        </Col>
                        <Col md={1} className="d-flex align-items-center pr-0">
                        <Card.Body className="mx-auto d-block align-items-center px-0 pb-0">
                            <Card.Img className="container-fluid mx-auto px-0" variant="left" src={`http://openweathermap.org/img/wn/${main.Current.weather[0].icon}@2x.png`} style={{ width: '5rem', height: '5rem' }}/>
                            <Card.Body className="pt-0 px-0">
                            <h5 style={{ textAlign:"center" }} className="container-fluid py-2 my-0 px-0">{`${main.Current.weather[0].main}`}</h5>
                            </Card.Body>
                        </Card.Body>
                        </Col>
                        <Col md={1} className="d-flex align-items-center">
                        <Card.Body className="mx-auto d-flex align-items-center pr-5 justify-content-center pb-0 px-0">
                            <Card.Body className="d-inline-flex px-0">
                                <h1 style={{ textAlign:"center" }} className="container-fluid py-2 my-0 px-0">{Math.round(main.Current.main.temp)}</h1>
                                <h4 className="mb-0 py-2">{'\u2103'}</h4>
                            </Card.Body>
                        </Card.Body>
                        </Col>
                        <Col md={2}>
                        <Card.Body className="mx-auto pb-0">
                            
                            <Container className=" px-0">
                                <Row>
                                    <Col md={12}>
                                <Card.Title style={{ textAlign: "left" }} className="mb-0 border-bottom-2">Details</Card.Title>
                                </Col>
                                </Row>
                                <Row>
                                    <Col md={8} className="px-0">
                                <Card.Body style={{ width: "8rem", textAlign: "left" }} className="px-0">
                                    <h6>{`Feels like`}</h6>
                                    <h6>{`Wind`}</h6>
                                    <h6>{`Humidity`}</h6>
                                    <h6>{`Precipitation Pressure`}</h6>
                                </Card.Body>
                                </Col>
                                <Col md={4}>
                                <Card.Body style={{ width: "8rem", textAlign: "left" }} className="px-0">
                                    <h6>{Math.round(main.Current.main.feels_like)}</h6>
                                    <h6>{`${main.Current.wind.speed} m/s`}</h6>
                                    <h6>{`${main.Current.main.humidity} %`}</h6>
                                    <h6 className="pt-3">{`${Math.round(main.Current.main.pressure)} hPa`}</h6>
                                </Card.Body>
                                </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                        <Card.Body className="pb-0 d-inline-flex container-fluid mr-0">
                            {(main.fiveDay) && (main.fiveDay.list.map((day, idx) => {

                                const utcSeconds = day.dt

                                const date = new Date(utcSeconds*1000)
                                // date.setUTCMilliseconds(utcSeconds);
                                console.log(date.getUTCDay())
                                console.log(date.getUTCHours())

                            return(<Card key={idx} className="mx-auto border-0" style={{ width: "10rem" }}>
                                
                            <Card.Img className="container-fluid mx-auto px-0" variant="left" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} style={{ width: '4rem', height: '4rem' }}/>
                                <Card.Body className="d-inline-flex px-2 pt-0 mx-auto">
                                <h6 style={{ textAlign:"center" }} className="container-fluid py-2 my-0 px-0">{Math.round(day.main.temp)}</h6>
                                <h6 className="mb-0 py-2">{'\u2103'}</h6>
                                </Card.Body>
                                <Card.Body className="flex-row px-0 pt-0">
                                <h6 className="mb-0 py-2 pb-0">{sevenDays[date.getUTCDay()]}</h6>
                                <h6 className="mb-0 py-2 pt-0">{`${date.getUTCHours()}:00`}</h6>
                                </Card.Body>
                            </Card>)}))}
                        </Card.Body>
                        </Col>
                        </Row>
                    </Container>
                </Card>
            </ListGroup.Item>
            {/* })} */}
            </ListGroup>
            </Container>)
            }))
            }
        </Container>
        
    )
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DefaultCity)