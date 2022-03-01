import { FC } from 'react';
import WideIconButton from './WideIconButton';
import loadMoreSrc from '../assets/icons/white/chevronDownWhite.svg';
import { ColorName } from '../types/ColorName';

interface Props {
  handleClick: () => void;
}

const LoadMoreButton: FC<Props> = (props) => (
  <WideIconButton
    src={loadMoreSrc}
    backgroundColor={ColorName.Yellow}
    hoverBackgroundColor={ColorName.Red}
    handleClick={props.handleClick}
  />
);

export default LoadMoreButton;
