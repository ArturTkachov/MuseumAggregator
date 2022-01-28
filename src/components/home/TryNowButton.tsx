import { useNavigate } from 'react-router-dom';
import RedButton from '../../components/RedButton';

const TryNowButton = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('collections');

  return (<RedButton text="Try now!" size="big" handleClick={handleClick}/>);
};

export default TryNowButton;
