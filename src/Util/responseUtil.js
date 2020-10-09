const handleResponse = (setter) => {
	return (response) => {
		if (response.statusText === "OK") {
			setter(response.data)
			console.log(response.data);
		} else {
			//TODO handle error
		}
	}
};
export default handleResponse;