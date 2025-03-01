// // layout.tsx
// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import api from './utils/api'; // Axios instance with token handling

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     const accessToken = Cookies.get('access_token');

//     if (accessToken) {
//       // If token exists, we consider the user authenticated
//       setIsAuthenticated(true);
//     } else {
//       // No token, redirect to login page
//       router.push('/login');
//     }
//   }, [router]);

//   if (!isAuthenticated) {
//     return <div>Loading...</div>; // Optionally show loading state
//   }

//   return (
//     <div>
//       <header>
//         <h1>My Protected App</h1>
//         {/* Add your navigation here */}
//       </header>
//       <main>{children}</main>
//       <footer>
//         <p>&copy; 2025 My Protected App</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
