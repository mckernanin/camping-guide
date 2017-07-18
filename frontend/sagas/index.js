import LocationSaga from './location';

export default function* IndexSaga() {
  yield [
    LocationSaga()
  ];
}
