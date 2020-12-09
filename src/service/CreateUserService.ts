import { getRepository } from "typeorm";
import User from '../models/User';
import { hash } from 'bcryptjs';


interface Request {
    name: string;
    email: string;
    password: string;
}


class CreateUserService {

    public async saveUser(data: Request): Promise<User> {
        const userRepository = getRepository(User);
        const { email, password, name } = data
        const checkUserExists = await userRepository.findOne({
            where: { email }
        })


        if (checkUserExists) {
            throw new Error('Endereço de Email em uso')
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            email,
            password: hashedPassword,
            name
        });

        await userRepository.save(user);

        return user
    }


}


export default CreateUserService