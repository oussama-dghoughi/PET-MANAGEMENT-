import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    create(animal: Animal): Promise<Animal>;
    findAll(): Promise<Animal[]>;
    findOne(id: number): Promise<Animal>;
    update(id: number, animal: Animal): Promise<Animal>;
    remove(id: number): Promise<void>;
}
