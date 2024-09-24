import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    create(person: Person): Promise<Person>;
    update(id: number, person: Partial<Person>): Promise<Person>;
    remove(id: number): Promise<void>;
}
