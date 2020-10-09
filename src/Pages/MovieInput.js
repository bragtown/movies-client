import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import * as axios from "axios";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";

const MovieInput = () => {
	const [title, setTitle] = useState('');
	const [plot, setPlot] = useState('');
	const [genre, setGenre] = useState('');
	const [releaseDate, setReleaseDate] = useState('');
	const [poster, setPoster] = useState('');
	const history = useHistory();

	const saveMovie = () => {
		axios.post('/api/movies', {title, plot, genre, releaseDate, poster}).then(response => {
			if (response.status === 201) {
				history.push('/');
			}
		});
	};

	return (
		<Container>
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Title</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl value={title} onChange = {event=>setTitle(event.target.value)}/>
			</InputGroup>

			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Genre</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl value={genre} onChange = {event=>setGenre(event.target.value)}/>
			</InputGroup>

			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Release Date</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl value={releaseDate} onChange = {event=>setReleaseDate(event.target.value)}/>
			</InputGroup>

			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Poster Url</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl value={poster} onChange = {event=>setPoster(event.target.value)}/>
			</InputGroup>

			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Plot</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl value={plot} onChange = {event=>setPlot(event.target.value)}/>
			</InputGroup>
			<Button onClick={()=>saveMovie()}>Save Movie</Button>
		</Container>
	)
};

export default MovieInput;