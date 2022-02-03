import { useNavigate } from 'react-router-dom';
import PageDescription from '../components/PageDescription';
import { PageType } from '../types/PageType';
import Collection from '../components/collections/Collection';
import antiquitySrc from '../assets/svg/Antiquity.svg';
import eastAsiaSrc from '../assets/svg/EastAsia.svg';
import middleAgesSrc from '../assets/svg/MiddleAges.svg';
import './css/Collections.css';

export type CollectionInfo = {
  name: string,
  imgSrc: string
}

const Collections = () => {
  const collectionInfos: CollectionInfo[] = [
    {
      name: "Antiquity",
      imgSrc: antiquitySrc
    },
    {
      name: "Asia",
      imgSrc: eastAsiaSrc
    },
    {
      name: "Middle Ages",
      imgSrc: middleAgesSrc
    }
  ];

  const navigate = useNavigate();
  const collections = collectionInfos.map( (info) =>
      <Collection key = {info.name}
                  name={info.name}
                  imgSrc={info.imgSrc}
                  handleClick= {
        () => navigate(info.name.toLowerCase().split(" ").join("-"))
      }/>
  );

  return (
    <div id="collections">
      <PageDescription pageType={PageType.Collections}/>
      <ul>
        {collections}
      </ul>
    </div>
  );
};

export default Collections;
