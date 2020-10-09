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
          {/*add movie component*/}
        </Route>
        <Route path="/new" exact>
          {/*add movie input component*/}
        </Route>
        <Route path="/movie/:id">
          {/*add movie view*/}
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
