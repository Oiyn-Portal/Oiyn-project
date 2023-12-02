import React from 'react';
import { FormattedMessage, IntlShape as IIntlShape } from 'react-intl';

import { DictionaryKey } from 'src/i18n';

type BasicCurrencyOptions = {
  symbol: string;
  significantDigits?: number;
  symbolPosition: 'after' | 'before';
};

export type Currency =
  | 'USD'
  | 'RUB'
  | 'EUR'
  | 'BRL'
  | 'ARS'
  | 'PEN'
  | 'COP'
  | 'BOB'
  | 'VEF'
  | 'CLP'
  | 'PYG'
  | 'UYU'
  | 'NGN'
  | 'DOP'
  | 'VND'
  | 'ZAR'
  | 'GBP'
  | 'THB'
  | 'SGD'
  | 'CHF'
  | 'UAH'
  | 'BMD'
  | 'PHP'
  | 'MXN'
  | 'AED'
  | 'CFA'
  | 'GHS'
  | 'BGN'
  | 'XCD'
  | 'DKK'
  | 'AUD'
  | 'AZN'
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'AMD'
  | 'AWG'
  | 'AFN'
  | 'BSD'
  | 'BDT'
  | 'BBD'
  | 'BHD'
  | 'BZD'
  | 'BYN'
  | 'XOF'
  | 'BAM'
  | 'BWP'
  | 'BND'
  | 'BIF'
  | 'BTN'
  | 'VUV'
  | 'HUF'
  | 'VES'
  | 'XAF'
  | 'HTG'
  | 'GYD'
  | 'GMD'
  | 'GTQ'
  | 'GNF'
  | 'GIP'
  | 'HNL'
  | 'HKD'
  | 'GEL'
  | 'DJF'
  | 'EGP'
  | 'ZMW'
  | 'MAD'
  | 'ZWL'
  | 'ILS'
  | 'INR'
  | 'IDR'
  | 'JOD'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'YER'
  | 'CVE'
  | 'KZT'
  | 'KYD'
  | 'KHR'
  | 'CAD'
  | 'QAR'
  | 'KES'
  | 'KGS'
  | 'CNY'
  | 'KMF'
  | 'CDF'
  | 'KPW'
  | 'KRW'
  | 'CRC'
  | 'CUP'
  | 'KWD'
  | 'ANG'
  | 'LAK'
  | 'LSL'
  | 'LRD'
  | 'LBP'
  | 'LYD'
  | 'MUR'
  | 'MRU'
  | 'MGA'
  | 'MOP'
  | 'MKD'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'MZN'
  | 'MDL'
  | 'MNT'
  | 'MMK'
  | 'NAD'
  | 'NPR'
  | 'NIO'
  | 'NZD'
  | 'XPF'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'PAB'
  | 'PGK'
  | 'PLN'
  | 'RWF'
  | 'RON'
  | 'SVC'
  | 'WST'
  | 'STN'
  | 'SAR'
  | 'SHP'
  | 'SCR'
  | 'RSD'
  | 'SYP'
  | 'SBD'
  | 'SOS'
  | 'SDG'
  | 'SRD'
  | 'SLL'
  | 'TJS'
  | 'TWD'
  | 'TZS'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TMT'
  | 'TRY'
  | 'UGX'
  | 'UZS'
  | 'FJD'
  | 'FKP'
  | 'HRK'
  | 'CZK'
  | 'SEK'
  | 'LKR'
  | 'ERN'
  | 'SZL'
  | 'ETB'
  | 'SSP'
  | 'JMD'
  | 'JPY';

const AllowedCurrencies: Record<Currency, BasicCurrencyOptions> = {
  USD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  RUB: {
    symbol: '₽',
    symbolPosition: 'after',
  },
  EUR: {
    symbol: '€',
    symbolPosition: 'before',
  },
  BRL: {
    symbol: 'R$',
    symbolPosition: 'after',
  },
  ARS: {
    symbol: '$',
    symbolPosition: 'after',
  },
  PEN: {
    symbol: 'S/',
    symbolPosition: 'after',
  },
  COP: {
    symbol: '$',
    symbolPosition: 'after',
  },
  BOB: {
    symbol: '$b',
    symbolPosition: 'after',
  },
  VEF: {
    symbol: 'Bs',
    symbolPosition: 'after',
  },
  CLP: {
    symbol: '$',
    symbolPosition: 'before',
  },
  PYG: {
    symbol: '₲',
    symbolPosition: 'before',
  },
  UYU: {
    symbol: '$',
    symbolPosition: 'before',
  },
  NGN: {
    symbol: '₦',
    symbolPosition: 'before',
  },
  DOP: {
    symbol: 'RD$',
    symbolPosition: 'before',
  },
  VND: {
    symbol: '₫',
    symbolPosition: 'before',
  },
  ZAR: {
    symbol: 'R',
    symbolPosition: 'before',
  },
  GBP: {
    symbol: '£',
    symbolPosition: 'before',
  },
  THB: {
    symbol: '฿',
    symbolPosition: 'before',
  },
  SGD: {
    symbol: 'S$',
    symbolPosition: 'before',
  },
  CHF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  UAH: {
    symbol: '₴',
    symbolPosition: 'before',
  },
  BMD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  PHP: {
    symbol: '₱',
    symbolPosition: 'before',
  },
  MXN: {
    symbol: 'MX$',
    symbolPosition: 'before',
  },
  AED: {
    symbol: 'DH',
    symbolPosition: 'before',
  },
  CFA: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  GHS: {
    symbol: '₵',
    symbolPosition: 'before',
  },
  BGN: {
    symbol: 'лв',
    symbolPosition: 'after',
  },
  XCD: {
    symbol: 'EC$',
    symbolPosition: 'before',
  },
  DKK: {
    symbol: 'kr',
    symbolPosition: 'after',
  },
  AUD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  AZN: {
    symbol: '₼',
    symbolPosition: 'after',
  },
  ALL: {
    symbol: 'L',
    symbolPosition: 'after',
  },
  DZD: {
    symbol: 'DA',
    symbolPosition: 'after',
  },
  AOA: {
    symbol: 'Kz',
    symbolPosition: 'after',
  },
  AMD: {
    symbol: 'Դ',
    symbolPosition: 'after',
  },
  AWG: {
    symbol: 'ƒ',
    symbolPosition: 'after',
  },
  AFN: {
    symbol: 'Af',
    symbolPosition: 'after',
  },
  BSD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  BDT: {
    symbol: '৳',
    symbolPosition: 'after',
  },
  BBD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  BHD: {
    symbol: 'BD',
    symbolPosition: 'after',
  },
  BZD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  BYN: {
    symbol: 'Br',
    symbolPosition: 'after',
  },
  XOF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  BAM: {
    symbol: 'KM',
    symbolPosition: 'after',
  },
  BWP: {
    symbol: 'P',
    symbolPosition: 'after',
  },
  BND: {
    symbol: '$',
    symbolPosition: 'before',
  },
  BIF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  BTN: {
    symbol: 'Nu',
    symbolPosition: 'after',
  },
  VUV: {
    symbol: 'Vt',
    symbolPosition: 'after',
  },
  HUF: {
    symbol: 'Ft',
    symbolPosition: 'after',
  },
  VES: {
    symbol: 'Bs.',
    symbolPosition: 'after',
  },
  XAF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  HTG: {
    symbol: 'G',
    symbolPosition: 'before',
  },
  GYD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  GMD: {
    symbol: 'D',
    symbolPosition: 'before',
  },
  GTQ: {
    symbol: 'Q',
    symbolPosition: 'after',
  },
  GNF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  GIP: {
    symbol: '£',
    symbolPosition: 'before',
  },
  HNL: {
    symbol: 'L',
    symbolPosition: 'after',
  },
  HKD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  GEL: {
    symbol: '₾',
    symbolPosition: 'after',
  },
  DJF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  EGP: {
    symbol: 'LE',
    symbolPosition: 'before',
  },
  ZMW: {
    symbol: 'K',
    symbolPosition: 'after',
  },
  MAD: {
    symbol: 'Dh',
    symbolPosition: 'after',
  },
  ZWL: {
    symbol: 'Z$',
    symbolPosition: 'before',
  },
  ILS: {
    symbol: '₪',
    symbolPosition: 'after',
  },
  INR: {
    symbol: '₹',
    symbolPosition: 'before',
  },
  IDR: {
    symbol: 'Rp',
    symbolPosition: 'before',
  },
  JOD: {
    symbol: 'JD',
    symbolPosition: 'after',
  },
  IQD: {
    symbol: 'ID',
    symbolPosition: 'after',
  },
  IRR: {
    symbol: 'IR',
    symbolPosition: 'after',
  },
  ISK: {
    symbol: 'kr',
    symbolPosition: 'after',
  },
  YER: {
    symbol: 'YR',
    symbolPosition: 'after',
  },
  CVE: {
    symbol: '$',
    symbolPosition: 'before',
  },
  KZT: {
    symbol: '₸',
    symbolPosition: 'after',
  },
  KYD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  KHR: {
    symbol: '៛',
    symbolPosition: 'after',
  },
  CAD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  QAR: {
    symbol: 'QR',
    symbolPosition: 'after',
  },
  KES: {
    symbol: 'KSh',
    symbolPosition: 'before',
  },
  KGS: {
    symbol: 'с',
    symbolPosition: 'after',
  },
  CNY: {
    symbol: '¥',
    symbolPosition: 'after',
  },
  KMF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  CDF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  KPW: {
    symbol: '원',
    symbolPosition: 'after',
  },
  KRW: {
    symbol: '₩',
    symbolPosition: 'after',
  },
  CRC: {
    symbol: '₡',
    symbolPosition: 'after',
  },
  CUP: {
    symbol: '$',
    symbolPosition: 'before',
  },
  KWD: {
    symbol: 'KD',
    symbolPosition: 'after',
  },
  ANG: {
    symbol: 'ƒ',
    symbolPosition: 'after',
  },
  LAK: {
    symbol: '₭',
    symbolPosition: 'after',
  },
  LSL: {
    symbol: 'L',
    symbolPosition: 'before',
  },
  LRD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  LBP: {
    symbol: '.ل.ل',
    symbolPosition: 'after',
  },
  LYD: {
    symbol: 'LD',
    symbolPosition: 'after',
  },
  MUR: {
    symbol: 'Re',
    symbolPosition: 'before',
  },
  MRU: {
    symbol: 'UM',
    symbolPosition: 'after',
  },
  MGA: {
    symbol: 'Ar.',
    symbolPosition: 'after',
  },
  MOP: {
    symbol: '$',
    symbolPosition: 'after',
  },
  MKD: {
    symbol: 'ден.',
    symbolPosition: 'after',
  },
  MWK: {
    symbol: 'K',
    symbolPosition: 'after',
  },
  MYR: {
    symbol: 'RM',
    symbolPosition: 'after',
  },
  MVR: {
    symbol: 'Rf',
    symbolPosition: 'after',
  },
  MZN: {
    symbol: 'MT',
    symbolPosition: 'after',
  },
  MDL: {
    symbol: 'L',
    symbolPosition: 'after',
  },
  MNT: {
    symbol: '₮',
    symbolPosition: 'after',
  },
  MMK: {
    symbol: 'K',
    symbolPosition: 'after',
  },
  NAD: {
    symbol: 'N$',
    symbolPosition: 'before',
  },
  NPR: {
    symbol: 'Re',
    symbolPosition: 'after',
  },
  NIO: {
    symbol: '$',
    symbolPosition: 'before',
  },
  NZD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  XPF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  NOK: {
    symbol: 'kr',
    symbolPosition: 'after',
  },
  OMR: {
    symbol: 'RO',
    symbolPosition: 'after',
  },
  PKR: {
    symbol: 'Re',
    symbolPosition: 'after',
  },
  PAB: {
    symbol: 'B/.',
    symbolPosition: 'after',
  },
  PGK: {
    symbol: 'K',
    symbolPosition: 'after',
  },
  PLN: {
    symbol: 'zł',
    symbolPosition: 'after',
  },
  RWF: {
    symbol: '₣',
    symbolPosition: 'before',
  },
  RON: {
    symbol: 'L',
    symbolPosition: 'after',
  },
  SVC: {
    symbol: '₡',
    symbolPosition: 'before',
  },
  WST: {
    symbol: '$',
    symbolPosition: 'before',
  },
  STN: {
    symbol: 'Db',
    symbolPosition: 'before',
  },
  SAR: {
    symbol: 'SR',
    symbolPosition: 'after',
  },
  SHP: {
    symbol: '£',
    symbolPosition: 'before',
  },
  SCR: {
    symbol: 'Re',
    symbolPosition: 'before',
  },
  RSD: {
    symbol: 'дин.',
    symbolPosition: 'after',
  },
  SYP: {
    symbol: 'S£',
    symbolPosition: 'after',
  },
  SBD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  SOS: {
    symbol: 'S',
    symbolPosition: 'before',
  },
  SDG: {
    symbol: '£',
    symbolPosition: 'before',
  },
  SRD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  SLL: {
    symbol: 'Le',
    symbolPosition: 'before',
  },
  TJS: {
    symbol: 'с.',
    symbolPosition: 'after',
  },
  TWD: {
    symbol: 'NT$',
    symbolPosition: 'before',
  },
  TZS: {
    symbol: 'TSh',
    symbolPosition: 'before',
  },
  TOP: {
    symbol: '$',
    symbolPosition: 'before',
  },
  TTD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  TND: {
    symbol: 'TD',
    symbolPosition: 'after',
  },
  TMT: {
    symbol: 'm',
    symbolPosition: 'after',
  },
  TRY: {
    symbol: '₺',
    symbolPosition: 'after',
  },
  UGX: {
    symbol: 'USh',
    symbolPosition: 'before',
  },
  UZS: {
    symbol: 'сўм',
    symbolPosition: 'after',
  },
  FJD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  FKP: {
    symbol: '£',
    symbolPosition: 'before',
  },
  HRK: {
    symbol: 'Kn',
    symbolPosition: 'after',
  },
  CZK: {
    symbol: 'Kč',
    symbolPosition: 'after',
  },
  SEK: {
    symbol: 'kr',
    symbolPosition: 'after',
  },
  LKR: {
    symbol: 'Re',
    symbolPosition: 'before',
  },
  ERN: {
    symbol: 'Nfk',
    symbolPosition: 'before',
  },
  SZL: {
    symbol: 'L',
    symbolPosition: 'before',
  },
  ETB: {
    symbol: 'Br',
    symbolPosition: 'before',
  },
  SSP: {
    symbol: 'SSP',
    symbolPosition: 'before',
  },
  JMD: {
    symbol: '$',
    symbolPosition: 'before',
  },
  JPY: {
    symbol: '¥',
    symbolPosition: 'after',
  },
};

export type IntlShape = IIntlShape;

export interface MsgProps {
  id: DictionaryKey;
  values?: Record<string, React.ReactNode>;
}

export interface CurrencyProps {
  currency: Currency;
  value: number;
}

const defaultOptions: BasicCurrencyOptions = {
  symbol: '$',
  significantDigits: 0,
  symbolPosition: 'before',
};

export const msg = (intl: IntlShape, { id, values }: MsgProps): string =>
  intl.formatMessage({ id }, values as never);

export const Msg: React.FC<MsgProps> = ({ id, values }) => (
  <FormattedMessage id={id} values={values} />
);

export const msgCurrencySymbol = (currency: Currency): string =>
  AllowedCurrencies[currency].symbol;

export const msgCurrency = ({ currency, value }: CurrencyProps): string => {
  const { significantDigits, symbol, symbolPosition } = {
    ...defaultOptions,
    ...AllowedCurrencies[currency],
  };

  const parsedValue = value.toFixed(significantDigits);

  return symbolPosition === 'before'
    ? symbol.concat(parsedValue)
    : parsedValue.concat(symbol);
};

export const MsgCurrency: React.FC<CurrencyProps> = (props) => (
  <>{msgCurrency(props)}</>
);
