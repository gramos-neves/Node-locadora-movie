import { Request, NextFunction, Response } from 'express';
import auth from '../config/auth';
import { verify } from 'jsonwebtoken';


interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error(" Jwt token is missing");
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, auth.jwt.secret)
        const { sub } = decoded as TokenPayload;

        request.user = {
            id: Number(sub)
        }
        return next();
    } catch {
        throw new Error('Invalid JWT token')
    }

}