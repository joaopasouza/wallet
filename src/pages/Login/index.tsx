import React from 'react';
import auth from '../../services/auth';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

const Login: React.FC = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          auth.login(() => {
            history.push('/');
          });
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
