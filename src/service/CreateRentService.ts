import { getRepository , Like} from "typeorm";
import Rent from '../models/Rent';


interface Request {
    id_user: number;
    id_movie: Array<{
        id_movie: number
    }>;
}


interface RequestDevolution {
    id: Array<{
        id: number
    }>;
}

class CreateRentService {

     //Alugar novos filmes
    public async saveRent(data: Request): Promise<Rent[]> {
        const rentRepository = getRepository(Rent);
        const newData = data.id_movie.map(resp => {
            return {
                id_user: data.id_user,
                id_movie: resp.id_movie
            }
        })

        const rent = rentRepository.create(newData);
        await rentRepository.save(rent);
        return rent

    }

       //listar filmes alugados
    public async ListRent(): Promise<Rent[]> {
        const rentRepository = getRepository(Rent);
        const rents = await rentRepository.find();
        return rents;
    }

     
    //devolução do filme
    public async devolutionRent(data: RequestDevolution): Promise<void> {

        const rentRepository = getRepository(Rent);
        const newData = data.id.map(resp => resp.id)
        const rents = await rentRepository.delete(newData);
     
    }

    
  

}


export default CreateRentService
