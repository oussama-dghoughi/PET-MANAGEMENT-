import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
export declare class PersonService {
    private personRepository;
    constructor(personRepository: Repository<Person>);
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    create(person: Person): Promise<Person>;
    update(id: number, person: Partial<Person>): Promise<Person>;
    remove(id: number): Promise<void>;
}
