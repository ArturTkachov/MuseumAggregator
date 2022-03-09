import { FC, useLayoutEffect, useRef } from 'react';
import {
  useGetWikiPageByIDQuery,
  useGetWikiSearchResultsQuery,
} from 'apis/wikiApi';
import LoadingText from './LoadingText';
import '../css/artwork-page/WikiInfo.css';

interface Props {
  query: string;
}

const WikiInfo: FC<Props> = (props) => {
  const { data: searchValues, isLoading: isSearching } =
    useGetWikiSearchResultsQuery(props.query);

  const id =
    searchValues && searchValues.length ? searchValues[0].pageid : null;
  const { data: page, isLoading: isParsing } = useGetWikiPageByIDQuery(
    Number(id),
    {
      skip: !Boolean(id),
    }
  );

  const divRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (divRef.current && page) divRef.current.innerHTML = page.extract;
  });

  const isLoading = isSearching || isParsing;

  return isLoading ? (
    <LoadingText />
  ) : (
    <div className="wiki-info" ref={divRef} />
  );
};

export default WikiInfo;
