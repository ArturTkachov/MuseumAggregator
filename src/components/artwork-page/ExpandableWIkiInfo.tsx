import { FC } from 'react';
import Expandable from '../Expandable';
import WikiInfo from './WikiInfo';

interface Props {
  text: string;
  query: string;
}

const ExpandableWIkiInfo: FC<Props> = (props) => (
  <Expandable text={props.text}>
    <WikiInfo query={props.query} />
  </Expandable>
);

export default ExpandableWIkiInfo;
