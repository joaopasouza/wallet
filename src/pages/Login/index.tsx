import React from 'react';
import auth from '../../services/auth';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => {
          auth.login(() => {
            history.push('/');
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
