import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../services/auth';

const Home: React.FC = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => {
          auth.logout(() => {
            history.push('/login');
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
