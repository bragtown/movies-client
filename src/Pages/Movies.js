import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import handleResponse from "../Util/responseUtil";
import * as axios from "axios";

const Movies = () => {
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
							<td>{movie.title}</td>
							<td>{movie.releaseDate}</td>
							<td>{movie.plot}</td>
							<td>Unknown Rating</td>
						</tr>
					))}
					</tbody>
				</Table>
			</span>
	);
};

export default Movies
