import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Movies from "./Pages/Movies";
import Movie from "./Pages/Movie";
import MovieInput from "./Pages/MovieInput";

function App() {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand>Bragtown Movies</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/">Movies</Nav.Link>
          <Nav.Link href="/new">Add Movie</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Movies/>
        </Route>
        <Route path="/new" exact>
          <MovieInput/>
        </Route>
        <Route path="/movie/:id">
          <Movie/>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
