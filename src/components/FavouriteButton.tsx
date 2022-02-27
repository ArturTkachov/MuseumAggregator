import { FC } from 'react';
import IconButton from '../components/IconButton';
import { useAppDispatch, useAppSelector } from '../store';
import { containsSpecifiedID } from '../actions/getRandomSpecifiedIDs';
import { addFavourite, removeFavourite } from '../feautres/favouritesSlice';
import yellowStar from '../assets/icons/yellow/starYellow.svg';
import redStar from '../assets/icons/red/starRed.svg';
import { SpecifiedArtworkID } from '../types/SpecifiedArtworkID';
import { ColorName } from '../types/ColorName';

interface Props {
  specID: SpecifiedArtworkID;
}

const FavouriteButton: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const specID = props.specID;
  const favourites = useAppSelector((state) => state.favourites);
  const isInFavourites = containsSpecifiedID(specID, favourites);
  const handleClick = isInFavourites
    ? () => dispatch(removeFavourite(specID))
    : () => dispatch(addFavourite(specID));

  const src = isInFavourites ? redStar : yellowStar;
  const hoverColor = isInFavourites ? ColorName.Red : ColorName.Yellow;

  return (
    <IconButton
      size="normal"
      src={src}
      hoverIconColor={ColorName.White}
      hoverBackgroundColor={hoverColor}
      handleClick={handleClick}
    />
  );
};

export default FavouriteButton;
