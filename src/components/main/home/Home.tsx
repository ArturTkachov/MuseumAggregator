import PageDescription from '../PageDescription';
import { PageType } from '../../../types/PageType';
import TryNowButton from './TryNowButton';
import src from '../../../assets/svg/ManWithLaptop.svg';
import '../../css/main/home/Home.css';

const Home = () => {
  return (
    <main>
      <PageDescription pageType={PageType.Home}/>
      <div id="content">
        <TryNowButton/>
        <img src={src} alt="Man sitting with a laptop"/>
      </div>
      <div id="floor"/>
    </main>
  );
};

export default Home;
