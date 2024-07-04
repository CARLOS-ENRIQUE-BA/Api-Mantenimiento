import Maestros from '../models/maestros';

export interface IMaestrosRepository {
    save(maestros: Maestros): Promise<Maestros>;
    findById(id: string): Promise<Maestros | null>;
    findAll(): Promise<Maestros[]>;
    update(maestros: Maestros): Promise<Maestros>;
    deleteById(id: string): Promise<void>;
}
