import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

const Privateroutes = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        if (auth?.token) {
          const res = await axios.get('http://localhost:8000/api/vl/auth/user-auth', {
            headers: {
              Authorization: auth.token,
            },
          });

          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        }
      } catch (error) {
        console.error('Error while making the request:', error);
        // Handle the error, e.g., redirect to an error page
      }
    };

    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default Privateroutes;
