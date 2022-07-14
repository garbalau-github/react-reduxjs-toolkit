import './App.css';

import { ReservationCard } from './components/ReservationCard';
import { CustomerCard } from './components/CustomerCard';

// Action Creator
import { addReservation } from './features/reservationSlice';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import { useState } from 'react';

const App = () => {
  const [reservationNameInput, setReservationNameInput] = useState('');

  // Get acceess to our state
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) {
      return;
    }

    // Dispatch Action to Reducer
    dispatch(addReservation(reservationNameInput));

    setReservationNameInput('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((reservation, idx) => {
                return (
                  <ReservationCard key={idx} name={reservation} index={idx} />
                );
              })}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map((customer, idx) => {
            return <CustomerCard {...customer} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
