import { FC, useLayoutEffect, useRef, useState } from 'react';
import {
  useGetWikiPageByIDQuery,
  useGetWikiSearchResultsQuery,
} from 'apis/wikiApi';
import LoadingText from './LoadingText';
import arrowSrc from 'assets/icons/white/chevronRightWhite.svg';
import '../css/artwork-page/ExpandableWikiInfo.css';

interface Props {
  text: string;
  query: string;
}

const ExpandableWIkiInfo: FC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { data: searchValues, isLoading: isSearching } =
    useGetWikiSearchResultsQuery(props.query, {
      skip: !isOpen,
    });

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

  return (
    <div className="expandable-wiki-info">
      <div className="wiki-info-name" onClick={() => setOpen(!isOpen)}>
        {props.text}
        <img src={arrowSrc} alt=">" className={isOpen ? 'rotated' : ''} />
      </div>
      {isLoading && <LoadingText />}
      {isOpen && <div className="wiki-info" ref={divRef} />}
    </div>
  );
};

export default ExpandableWIkiInfo;
