import { call, put, takeEvery } from 'redux-saga/effects';

import { actions } from 'src/actions';
import { IP_API_URL } from 'src/constants/env';
import { LOCALES, defaultLocale } from 'src/i18n';
import { GeoInfo } from 'src/types';
import { getLocale } from 'src/utils/lib';

function* getGeoInfo(): Generator {
  try {
    const res = (yield call(fetch, IP_API_URL)) as Response;
    const info = (yield res.json()) as GeoInfo;

    const deviceLanguage = navigator.language;
    const locale = getLocale(LOCALES, defaultLocale, deviceLanguage);

    yield put(actions.ui.geoInfo.set({ info: { ...info, locale } }));
  } catch (e) {
    console.error(e);
  }
}

export function* userSaga(): Generator {
  yield takeEvery(actions.api.user.getUser.started.type, getGeoInfo);
}
