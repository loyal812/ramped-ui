import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken');

    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Proceed if token is present
    if (token) {
        const verifyTokenEndpoint = `${req.nextUrl.origin}/api/verifyToken`;
        try {
            // Prepare the request for token verification
            const response = await fetch(verifyTokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                },
            });

            // Ensure the response is JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError('The response is not JSON');
            }

            const data = await response.json();

            if (response.ok && data.valid) {
                // Token is valid, proceed with the request
                return NextResponse.next();
            } else {
                // Token is invalid, redirect to login
                return NextResponse.redirect(new URL('/auth/login', req.url));
            }
        } catch (error) {
            console.error('Error verifying token:', error);
            // Handle error, possibly redirect to an error page or login
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
    } else {
        // No token, redirect to login
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: [
        '/',
        '/dashboard'
    ]
};