export enum PAGES {
  MAIN = '/',
  ERROR_404 = '*',

  GAME = '/:id',
}

export const routes = Object.values(PAGES)
  .filter((page) => page !== PAGES.ERROR_404)
  .map((path) => ({ path }));

export type Pages = keyof typeof PAGES;
