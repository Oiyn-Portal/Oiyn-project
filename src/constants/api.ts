export const ENDPOINTS = {
  BASE_URL: '',
  LIST_RECORDS: '/listRecords',
} as const;

export type Endpoints = typeof ENDPOINTS;
