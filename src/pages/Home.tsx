import PageDescription from '../components/PageDescription';
import { PageType } from '../types/PageType';
import TryNowButton from '../components/home/TryNowButton';
import src from '../assets/svg/ManWithLaptop.svg';
import '../pages/css/Home.css';

const Home = () => (
    <div id="home">
      <PageDescription pageType={PageType.Home}/>
      <div id="home-content">
        <TryNowButton/>
        <img src={src} alt="Man sitting with a laptop"/>
      </div>
    </div>
);

export default Home;
