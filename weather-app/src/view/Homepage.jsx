import React from "react" 
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import SearchBar from "../components/Search-Bar"
import ResultView from "./Results"

function HomeView(props) {
    return (
      <>
    <SearchBar/>
    <ResultView/>
    </>
    )
  }

  export default HomeView