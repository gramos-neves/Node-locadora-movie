import { getRepository } from "typeorm";
import Movie from "../models/Movie";

class CreateInitialService {

     //Colocar dados inicial se nao tiver nenhum cadastrado
     public async saveMovie(data: any): Promise<void> {
        const movieRepository = getRepository(Movie);
        const result = await movieRepository.find()
         if(!result.length){
            const movie = movieRepository.create(data);
            await movieRepository.save(movie);
         }
     
    }

}

export default CreateInitialService 