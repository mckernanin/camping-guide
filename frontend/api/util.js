export default function createApiRequest(url, method, data) {
  return fetch(url, {
    method,
    body: data ? JSON.stringify(data) : null
  })
  .then(response => response.json())
  .catch((error) => {
    throw error;
  });
}
