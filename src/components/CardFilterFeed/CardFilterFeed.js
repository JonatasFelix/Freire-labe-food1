import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import { ContainerRest, Info } from './style';

const CardFilterFeed = () => {
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);
  const [category, setCategory] = useState('');

  const restaurantsListFilter =
    states.restaurants &&
    states.restaurants.map((restaurant, index) => {
      return (
        <ContainerRest key={index} onClick={() => navigate()}>
          <img src={restaurant.logoUrl} />
          <h3>{restaurant.name}</h3>
          <Info>
            <p>
              {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
            </p>
            <p>Frete: R$ {restaurant.shipping},00</p>
          </Info>
        </ContainerRest>
      );
    });

  return <div>{restaurantsListFilter}</div>;
};

export default CardFilterFeed;