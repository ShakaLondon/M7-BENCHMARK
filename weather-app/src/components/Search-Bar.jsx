import React, { useState, useEffect } from "react"
import { FormControl, Button, InputGroup, Container, Form } from "react-bootstrap"
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { fetchResultsAction, addToFavAction, removeFromFavAction, setSearchQuery, clearSearchResult } from "../redux/actions/index"


const mapStateToProps = (state) => ({
    favouriteJobs: state.favourites.locations,
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
    setSearchQuery: (query) => dispatch(setSearchQuery(query)),
    clearSearch: (query) => dispatch(clearSearchResult(query))
  });

const SearchBar = ({
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
    clearSearch,
}) => {

    const [search, setSearch] = useState("");

    const handleChange= (e) => {
        // e.preventDefault();
        console.log(e.target.value)
        setSearch(e.target.value);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResultsAction(search, "search")
      }

      // const clearSearchQuery = (e) => {

      //   clearSearch(" ")
      // }

      useEffect(() => {
        setSearchQuery(search)
        // fetchResultsAction(search, "search")
    }, [search])

    return (
    <Container className="my-3 px-5">
            <Form onSubmit={handleSubmit} style={{width: "100%"}}>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Type in your chosen city here..."
                    aria-label="Weather Search Box"
                    aria-describedby="Weather Search Box"
                    name="searchQuery"
                    type="text"
                    value={search}
                    onChange={handleChange}
                    />
                    <Button variant="outline-secondary border-gray" id="button-addon2" onClick={() => clearSearch(" ")}>
                    <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                    <Button variant="outline-secondary" id="button-addon2" type="submit" >
                    Search
                    </Button>
                </InputGroup>
            </Form>
    </Container>
    )
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)