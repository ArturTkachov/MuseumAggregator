import { FC, useLayoutEffect, useRef, useState } from 'react';
import {
  useGetWikiPageByIDQuery,
  useGetWikiSearchResultsQuery,
} from '../../apis/wikiApi';
import arrowSrc from '../../assets/icons/white/chevronRightWhite.svg';
import '../css/artwork-page/ExpandableWikiInfo.css';

interface Props {
  text: string;
  query: string;
}

const ExpandableWIkiInfo: FC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { data: searchValues } = useGetWikiSearchResultsQuery(props.query, {
    skip: !isOpen,
  });

  const id = searchValues ? searchValues[0].pageid : null;
  const { data: page } = useGetWikiPageByIDQuery(Number(id), {
    skip: !Boolean(id),
  });

  const divRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (divRef.current && page) divRef.current.innerHTML = page.extract;
  });

  return (
    <div className="expandable-wiki-info">
      <div className="wiki-info-name" onClick={() => setOpen(!isOpen)}>
        {props.text}
        <img src={arrowSrc} alt=">" className={isOpen ? 'rotated' : ''} />
      </div>
      {isOpen && <div ref={divRef} />}
    </div>
  );
};

export default ExpandableWIkiInfo;
