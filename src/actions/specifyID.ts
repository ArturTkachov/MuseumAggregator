import { DataSource, SpecifiedArtworkID } from '../types/SpecifiedArtworkID';

const specifyID = (source: DataSource, id: number): SpecifiedArtworkID => ({
  source,
  id,
});

export default specifyID;
