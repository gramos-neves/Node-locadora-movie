import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import auth from '../config/auth';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}



class AuthenticateUserService {
    public async authExecute(data: Request): Promise<Response> {
        const userRepository = getRepository(User);
        const { email, password } = data

        const user = await userRepository.findOne({ where: { email } })


        if (!user) {
            throw new Error('Combinação senha/Email incorreta.')
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            throw new Error('Combinação senha/Email incorreta.')
        }

        const token = sign({}, auth.jwt.secret, { subject: `${user.id}`, expiresIn: auth.jwt.expiresIn })

        return { user, token }


    }

}



export default AuthenticateUserService