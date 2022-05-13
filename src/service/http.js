const baseURL = 'https://api-factory.simbirsoft1.com/api/';
const key = {
  'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
};
const content = {
  'Content-Type': 'application/json;charset=utf-8'
};
const optionsGet = {
  headers: {
    ...key,
  },
}
const optionsPost = {
  headers: {
    ...key,
    ...content
  },
}

export default {
  async sendGet(url, query, id) {
    if (query) query = '?' + query;
    else query = '';
    if (id) id = '/' + id;
    else id = '';
    return fetch(`${baseURL}${url}${id}${query}`, optionsGet)
      .then(response => response.json())
  },
  async sendPost(url, body) {
    const requestOptions = {
      method: 'POST',
      ...optionsPost,
      body,
    };
    const response = await fetch(`${baseURL}${url}`, requestOptions);
    return await response.json();
  }
}