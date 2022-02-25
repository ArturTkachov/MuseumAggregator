import { FC } from 'react';
import './css/PageTitle.css';

interface Props {
  text?: string;
  underlined: boolean;
}

const PageTitle: FC<Props> = (props) => (
  <h1 className={`page-title ${props.underlined && 'border-bottom'}`}>
    {props.text || props.children}
  </h1>
);

export default PageTitle;
