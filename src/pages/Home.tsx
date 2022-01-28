import PageDescription from '../components/main/PageDescription';
import { PageType } from '../types/PageType';
import TryNowButton from '../components/main/home/TryNowButton';
import src from 'src/assets/svg/ManWithLaptop.svg';
import 'src/pages/css/Home.css';

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
