import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../services/auth';

import Button from '../../components/Button';

const Home: React.FC = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="secondary"
        type="button"
        onClick={() => {
          auth.logout(() => {
            history.push('/login');
          });
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
