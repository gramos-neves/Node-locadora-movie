import { Router, Request, Response } from 'express';
import CreateUserService from '../service/CreateUserService';

const usersRouter = Router();

//criação de novo usuario
usersRouter.post('/', async (request: Request, response: Response) => {

    try {
        const { name, email, password } = request.body;
        const userService = new CreateUserService();
        const user = await userService.saveUser({ name, email, password })
        delete user.password;
        return response.json(user)

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})




export default usersRouter 