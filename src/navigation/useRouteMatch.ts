import { matchRoutes, useLocation } from 'react-router-dom';

import { PAGES, routes } from 'src/constants/pages';

export const useRouteMatch = () => {
  const location = useLocation();
  const results = matchRoutes(routes, location) || [];

  return results[0]?.route?.path as PAGES | undefined;
};
