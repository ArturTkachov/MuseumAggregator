import { FC } from 'react';
import '../css/preview/LoadingArtworkPreview.css';

const LoadingArtworkPreview: FC = () => (
  <li className="loading-artwork-preview">
    <div className="loading-preview-image" />
    <ul className="loading-preview-info">
      <li />
      <li />
      <li />
      <li />
    </ul>
  </li>
);

export default LoadingArtworkPreview;
