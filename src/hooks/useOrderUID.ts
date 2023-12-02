import { useParams } from 'react-router-dom';

export const useOrderUID = () => {
  const { orderUID = '' } = useParams<{ orderUID: string }>();

  return orderUID;
};
