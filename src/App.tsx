import './App.css';

import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const App = () => {
  // Get acceess to our state
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  console.log(reservations);

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              <div className='reservation-card-container'>Laith Harb</div>
              <div className='reservation-card-container'>Laith Harb</div>
              <div className='reservation-card-container'>Laith Harb</div>
              <div className='reservation-card-container'>Laith Harb</div>
            </div>
          </div>
          <div className='reservation-input-container'>
            <input />
            <button>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          <div className='customer-food-card-container'>
            <p>Selena Gomez</p>
            <div className='customer-foods-container'>
              <div className='customer-food'></div>
              <div className='customer-food-input-container'>
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
