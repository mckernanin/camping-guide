export default function createApiRequest(url, method, data) {
  return new Promise((resolve, reject) =>
    fetch(`/api/${url}`, {
      method: method || 'GET',
      body: data ? JSON.stringify(data) : null
    })
    .then(response => resolve(response.json()))
    .catch(error => reject(error))
  );
}
