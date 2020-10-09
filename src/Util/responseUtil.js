const handleResponse = (setter) => {
	return (response) => {
		console.log('response', response);
		if (response.statusText === "OK") {
			setter(response.data)
		} else {
			//TODO handle error
		}
	}
};
export default handleResponse;