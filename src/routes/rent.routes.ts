import { Router, Request, Response } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateRentService from '../service/CreateRentService';

const rentRouter = Router();

rentRouter.use(ensureAuthenticated)

//lista de filmes alugados
rentRouter.get('/', async (request: Request, response: Response) => {
    try {
        const createRentService = new CreateRentService()
        const rents = await createRentService.ListRent()
        response.json(rents);
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

//alugual um novo filme
rentRouter.post('/', async (request: Request, response: Response) => {
    try {
        const createRentService = new CreateRentService()
        const rents = request.body;
        const id_user = request.user.id;
        const rent = await createRentService.saveRent({ id_user, id_movie: rents })
        response.status(201).json(rent)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})


//Devolução de um filme
rentRouter.post('/devolution', async (request: Request, response: Response) => {
    try {
        const createRentService = new CreateRentService()
        const rents = request.body;

        await createRentService.devolutionRent({ id: rents });
        response.status(201).json("devolution")
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})


export default rentRouter

