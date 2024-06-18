import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

type Data = {
    valid: boolean;
    message?: string;
};

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ valid: false, message: 'Method Not Allowed' });
    }

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ valid: false, message: 'Token is missing' });
    }

    try {
        // Verify the token
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ valid: false, message: 'Invalid token' });
            }

            // If the token is valid, proceed with the request
            return res.status(200).json({ valid: true });
        });
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(500).json({ valid: false, message: 'Internal Server Error' });
    }
}
