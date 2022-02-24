import { FC, MouseEvent, Dispatch, SetStateAction } from 'react';

interface ListProps {
  images: string[];
  setIndex: Dispatch<SetStateAction<number>>;
}

const ImageViewerList: FC<ListProps> = (props) => {
  const images = props.images;

  const handleClick = (e: MouseEvent<HTMLLIElement>, index: number) => {
    props.setIndex(index);
    const eventLi = e.currentTarget;
    const ul = eventLi.closest<HTMLUListElement>('ul');
    if (!ul) return;
    for (let li of ul.children) {
      if (li === eventLi) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    }
  };

  return (
    <ul>
      {images.map((image, index) => (
        <ImageViewerListItem
          key={image}
          image={image}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

interface ListItemProps {
  image: string;
  index: number;
  handleClick: (e: MouseEvent<HTMLLIElement>, index: number) => void;
}

const ImageViewerListItem: FC<ListItemProps> = (props) => (
  <li
    className={props.index === 0 ? 'active' : ''}
    onClick={(e) => props.handleClick(e, props.index)}
  >
    <img src={props.image} alt="artwork" />
  </li>
);

export default ImageViewerList;
