import { Router, Request, Response } from 'express';
import CreateMovieService from '../service/CreateMovieService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const movieRouter = Router();


movieRouter.use(ensureAuthenticated)

//Salvar Novos Filmes 
movieRouter.post('/', async (request: Request, response: Response) => {
    try {
        const movies = request.body;
        const createMovieService = new CreateMovieService()
        const movie = await createMovieService.saveMovie(movies);
        response.status(201).json(movie)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }

})

//Lista todos os filmes
movieRouter.get('/', async (request: Request, response: Response) => {
    try {
        const createMovieService = new CreateMovieService()
        const movie = await createMovieService.listMovie();
        response.status(201).json(movie)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }


})


//lista de filmes por tiulo
movieRouter.get('/search', async (request: Request, response: Response) => {
    try {

        const { title } = request.query
        const createMovieService = new CreateMovieService()
        const rents = await createMovieService.searchMovie(title)
        response.json(rents);
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})




export default movieRouter