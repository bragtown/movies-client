import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import handleResponse from "../Util/responseUtil";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Movies = () => {
	const quickSetup = () => {
		axios.get('/api/movies/setup').then(handleResponse(setMovies));
	};
	const [movies, setMovies] = useState(null);
	if (!movies) {
		axios.get('/api/movies').then(handleResponse(setMovies))
	}
	return (
			<span>

				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Title</th>
							<th>Release Date</th>
							<th>Plot</th>
							<th>Average Rating</th>
						</tr>
					</thead>
					<tbody>
					{movies && movies.map(movie=> (
						<tr key={movie.id}>
							<td><Link to={`/movie/${movie.id}`}>{movie.title}</Link></td>
							<td>{movie.releaseDate}</td>
							<td>{movie.plot}</td>
							<td>Unknown Rating</td>
						</tr>
					))}
					</tbody>
				</Table>
				<QuickSetupButton show = {movies === null || movies.length === 0} setup={quickSetup}/>
			</span>
	);
};

const QuickSetupButton = ({show, setup}) => {
	if (show) {
		return <Button onClick={() => setup()}>Quick Setup</Button>
	} else {
		return '';
	}
};

export default Movies
