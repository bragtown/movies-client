import React, {useState} from "react";
import {Card, Container, Jumbotron} from "react-bootstrap";
import {
	useRouteMatch
} from "react-router-dom";
import * as axios from "axios";
import handleResponse from "../Util/responseUtil";
import styled from 'styled-components'


const Centered = styled.div`
  margin-left:auto;
  margin-right:auto;
  text-align: center;
`;

const Movie = () => {
	const [movie, setMovie] = useState(null);
	let match = useRouteMatch("/movie/:id");
	if (!movie) {
		axios.get(`/api/movies/movie/${match.params.id}`).then(handleResponse(setMovie));
	}
	return (
			<Container>
				{
					movie ? (
					<Centered>
							<h1>{movie.title}</h1>
							<div><img src={movie.poster}/></div>
							<p>Released {movie.releaseDate} - {movie.genre}</p>
							<p>{movie.plot}</p>
					</Centered>
				) : ''
				}
			</Container>
	)
};
 export default Movie;