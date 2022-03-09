import { FC, ReactNode, useState } from 'react';
import arrowSrc from 'assets/icons/white/chevronRightWhite.svg';
import './css/Expandable.css';

interface Props {
  text: string;
  children: ReactNode;
}

const Expandable: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable">
      <div className="expandable-name" onClick={() => setIsOpen(!isOpen)}>
        {props.text}
        <img src={arrowSrc} alt=">" className={isOpen ? 'rotated' : ''} />
      </div>
      {isOpen && props.children}
    </div>
  );
};

export default Expandable;
