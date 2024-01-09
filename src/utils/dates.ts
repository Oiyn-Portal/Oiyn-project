import 'dayjs/locale/en';

import dayjs, { locale } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import objectSupport from 'dayjs/plugin/objectSupport';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(customParseFormat);
dayjs.locale(locale());
dayjs.extend(localizedFormat);
dayjs.extend(objectSupport);
dayjs.extend(localeData);
dayjs.extend(weekday);

export const getFormattedDate = (date: string) =>
  dayjs(date).isValid() ? dayjs(date).format('DD.MM.YYYY') : '';
