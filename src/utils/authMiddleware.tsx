"Middleware authentication";

import Cookies from 'js-cookie';
import axios from 'axios';
import { User } from '@/interfaces/User';

// Function to check if user is authenticated and has the right role
export const authMiddleware = async () => {
  const token : string | undefined = Cookies.get('auth_token'); // JWT or any session token
  
  if (!token) {
    // Redirect if no token is found (user not logged in)
    return {
      redirect: {
        destination: '/login', // Redirect to login page if not authenticated
        permanent: false,
      },
    };
  }

  try {
    // Use axios to make an API request to your Laravel backend to verify the user's role
    const res = await axios.get(`${process.env.APP_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user : User = res.data;

    // Check if the user has the required role
    user.roles?.forEach(role => {
      if (role !== 'admin' && role !== 'auteur') {
        return {
          redirect: {
            destination: '/unauthorized', // Redirect if the user is not admin or auteur
            permanent: false,
          },
        };
      }
      
    });


    // Continue with the request if the user is authorized
    return {
      props: { user }, // Pass user data to the page if needed
    };
  } catch (error) {
    console.error('Authentication error:', error);

    // If the API call fails, we redirect to login
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};
