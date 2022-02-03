import { FC } from 'react';
import { CollectionInfo } from '../../pages/Collections';
import '../css/collections/Collection.css';

type Props = CollectionInfo & {
  handleClick: () => void
}

const Collection: FC<Props> = (props) => (
  <li className="collection" onClick={props.handleClick}>
    <img src={props.imgSrc} alt={`${props.name} collection`}/>
    <span>{props.name}</span>
  </li>
);

export default Collection;
