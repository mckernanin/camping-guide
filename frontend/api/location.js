import createApiRequest from './util';

export default function fetchLocationsApi() {
  return createApiRequest('/api/locations', 'GET', null);
}
