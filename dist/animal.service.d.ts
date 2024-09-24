import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
export declare class AnimalService {
    private readonly animalRepository;
    constructor(animalRepository: Repository<Animal>);
    create(animal: Animal): Promise<Animal>;
    findAll(): Promise<Animal[]>;
    findOne(id: number): Promise<Animal>;
    update(id: number, animal: Animal): Promise<Animal>;
    remove(id: number): Promise<void>;
}
