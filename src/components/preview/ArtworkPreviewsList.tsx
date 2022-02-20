import { FC } from 'react';
import { SpecifiedArtworkID } from '../../types/SpecifiedArtworkID';
import ArtworkPreviewProxy from '../../components/preview/ArtworkPreviewProxy';
import '../css/preview/ArtworkPreviewsList.css';

interface Props {
  specifiedIDs: SpecifiedArtworkID[];
}

const ArtworkPreviewsList: FC<Props> = (props) => (
  <ul id="previews-list">
    {props.specifiedIDs.map((specID) => (
      <ArtworkPreviewProxy id={specID.id} source={specID.source} />
    ))}
  </ul>
);

export default ArtworkPreviewsList;
