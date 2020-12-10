import { Router, Request, Response } from 'express';
import CreateInitialService from '../service/CreateInitialService';
import moviesData from '../database/data';

const initialRouter = Router();

//Cadastro de pré dados de filmes 
initialRouter.get('/', async (request: Request, response: Response) => {
    try {
        const createInitialService = new CreateInitialService()
        const movie = await createInitialService.saveMovie(moviesData);
        response.send("initial")
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }

})


export default initialRouter 