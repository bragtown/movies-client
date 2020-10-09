const handleResponse = (setter) => {
	return (response) => {
		if (response.ok) {
			setter(response.data)
		} else {
			//TODO handle error
		}
	}
};
export default handleResponse;