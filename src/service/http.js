const baseURL = 'https://api-factory.simbirsoft1.com/api/';
const options = {
    headers: {
        'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
    },
}
const sendRequest = (url, query) => {
    if (query) query = '?' + query;
    else query = '';
    return fetch(`${baseURL}${url}${query}`, options)
        .then(response => response.json())
}

export default sendRequest