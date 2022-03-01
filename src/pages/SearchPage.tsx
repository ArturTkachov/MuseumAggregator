import { FC, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useParams } from 'react-router-dom';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import { useGetMetArtworksIDsSearchQuery } from '../apis/metApi';
import specifyID from '../actions/specifyID';
import LoadMoreButton from '../components/LoadMoreButton';

const SearchPage: FC = () => {
  const [index, setIndex] = useState(0);

  const { query } = useParams();
  const { data: ids, isLoading } = useGetMetArtworksIDsSearchQuery(
    String(query),
    { skip: !Boolean(query) }
  );

  if (isLoading || !ids) return <>Loading...</>;
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
