import { FC } from 'react';
import './css/LoadingSpinner.css';

export const LoadingSpinner: FC = () => (
  <div className="loading-spinner">
    <div />
    <div />
    <div />
    <div />
  </div>
);

export const PageLoadingSpinner: FC = () => (
  <div id="page-loading-spinner">
    <LoadingSpinner />
  </div>
);
