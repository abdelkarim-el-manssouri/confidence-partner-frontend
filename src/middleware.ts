import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
import axios from 'axios';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const auth_token =  request.cookies.get('auth_token')?.value;
  let isTokenValid = true;

  try {
    // Make an asynchronous call to check the validity of the token
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
      },
    });
    
    if (response.status === 200) {
      // If the token is valid, continue to the next middleware or route
      isTokenValid = true;
    }
    // Log the status

    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // If the axios call fails, log the error and check for 401 status
      if (error.response && error.response.status === 401) {
        isTokenValid = false;
        
      } else {
        console.log('Axios Error: ', error);
        isTokenValid = false;
      }

    }
  }

  
  if ((!auth_token || !isTokenValid)  && request.nextUrl.pathname.startsWith('/admin')) {
    console.log('isTokenValid : ', isTokenValid); 
    return NextResponse.redirect(new URL('/auth/login', request.url))

  }
  if (auth_token && isTokenValid && request.nextUrl.pathname === '/auth/login') {
    const dashboardUrl = new URL('/admin', request.url); // Redirect to dashboard
    return NextResponse.redirect(dashboardUrl);
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
}