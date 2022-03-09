import { FC } from 'react';
import '../css/artwork-page/LoadingText.css';

const LoadingText: FC = () => {
  const lis = [];
  for (let i = 0; i < 60; i++) {
    lis.push(<li key={i} />);
  }

  return <ul className="loading-text">{lis}</ul>;
};

export default LoadingText;
