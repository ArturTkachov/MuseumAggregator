import PageDescription from '../components/PageDescription';
import { PageType } from '../types/PageType';
import TryNowButton from '../components/main/home/TryNowButton';
import src from '../assets/svg/ManWithLaptop.svg';
import '../pages/css/Home.css';

const Home = () => (
    <main>
      <PageDescription pageType={PageType.Home}/>
      <div id="content">
        <TryNowButton/>
        <img src={src} alt="Man sitting with a laptop"/>
      </div>
    </main>
);

export default Home;
