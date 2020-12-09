import { Router, Request, Response } from 'express';
import AuthenticateUserService from '../service/AuthenticateUserService';

const sessionRouter = Router();



//criação do token e validação do usuario
sessionRouter.post('/', async (request: Request, response: Response) => {

    try {
        const { email, password } = request.body;
        const authenticatedUser = new AuthenticateUserService();
        const { user , token } = await authenticatedUser.authExecute({ email, password });
        delete user.password;
        
        return response.json({ user, token })

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})




export default sessionRouter