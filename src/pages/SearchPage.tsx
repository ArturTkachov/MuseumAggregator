import { FC, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useParams } from 'react-router-dom';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import { useGetMetArtworksIDsBySearchQuery } from '../apis/metApi';
import specifyID from '../actions/specifyID';
import LoadMoreButton from '../components/LoadMoreButton';
import { PageLoadingSpinner } from '../components/LoadingSpinner';

const SearchPage: FC = () => {
  const [index, setIndex] = useState(0);

  const { query } = useParams();
  const { data: ids, isLoading } = useGetMetArtworksIDsBySearchQuery(
    String(query),
    { skip: !Boolean(query) }
  );

  if (isLoading) return <PageLoadingSpinner />;
  if (!ids) return <p>No results found</p>;
  const specIDs = ids
    .slice(index, index + 15)
    .map((id) => specifyID('met', id));
  return (
    <>
      <PageTitle text={`Search results for: ${query}`} underlined={true} />
      <ArtworkPreviewsList specifiedIDs={specIDs} />
      <LoadMoreButton handleClick={() => setIndex(index + 5)} />
    </>
  );
};

export default SearchPage;
