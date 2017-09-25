import { locationsSaga } from './modules/location';
import { signupSaga } from './modules/signup';
import { loginSaga } from './modules/login';

export default function* IndexSaga() {
  yield [locationsSaga(), signupSaga(), loginSaga()];
}
