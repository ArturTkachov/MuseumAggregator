import { FC } from 'react';
import { useGetAllMetArtworksIDsQuery } from '../apis/metApi';
import { PageLoadingSpinner } from '../components/LoadingSpinner';
import specifyID from '../actions/specifyID';
import getRandomArrayElement from '../actions/getRandomArrayElement';
import { Navigate } from 'react-router-dom';

const RandomArtworkPage: FC = () => {
  const { data: ids, isLoading } = useGetAllMetArtworksIDsQuery();
  if (isLoading || !ids) return <PageLoadingSpinner />;
  let specID = specifyID('met', getRandomArrayElement(ids));
  return <Navigate to={`../${specID.source}/${specID.id}`} />;
};

export default RandomArtworkPage;
