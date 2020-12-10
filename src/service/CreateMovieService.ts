import { getRepository, Like } from "typeorm";
import Movie from '../models/Movie';


interface Request {
    title: string;
    director: string;
}

class CreateUserService {

    //salvar filmes
    public async saveMovie(data: Request): Promise<Movie> {
        const movieRepository = getRepository(Movie);
        const movie = movieRepository.create(data);
        await movieRepository.save(movie);
        return movie
    }

    //listar filmes disponiveis
    public async listMovie(): Promise<Movie[]> {
        const movieRepository = getRepository(Movie);
        const movies = movieRepository.find();
        return movies
    }

    //buscar filme por title
    public async searchMovie(title: any) : Promise<Movie[]>{
        console.log(title)
        const rentRepository = getRepository(Movie);
        const rents = await rentRepository.find({
            title: Like(`%${title}%`)
        }) 
      
        return rents
    }



}


export default CreateUserService