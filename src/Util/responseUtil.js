const handleResponse = (setter) => {
	return (response) => {
		if (response.statusText === "OK") {
			setter(response.data)
		} else {
			//TODO handle error
		}
	}
};
export default handleResponse;