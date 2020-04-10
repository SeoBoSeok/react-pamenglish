import antdKor from 'antd/lib/locale-provider/ko_KR';
import appLocaleData from 'react-intl/locale-data/ko';
import korMessages from '../locales/ko_KR.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const KorLang = {
  messages: {
    ...korMessages,
  },
  antd: antdKor,
  locale: 'ko-KR',
  data: appLocaleData,
};
export default KorLang;