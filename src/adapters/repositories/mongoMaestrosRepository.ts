import { IMaestrosRepository } from '../../domain/repositories/IMaestrosRepository';
import Maestros from '../../domain/models/maestros';
import { IMaestrosDocument, MaestrosModel } from './schemas/maestrosSchema';

class MongoMaestrosRepository implements IMaestrosRepository {
    async save(maestros: Maestros): Promise<Maestros> {
        const maestrosModel = new MaestrosModel(maestros);
        const savedMaestros = await maestrosModel.save();
        return new Maestros(savedMaestros.id, savedMaestros.name, savedMaestros.description);
    }

    async findById(id: string): Promise<Maestros | null> {
        const maestros = await MaestrosModel.findById(id);
        if (!maestros) return null;
        return new Maestros(maestros.id, maestros.name, maestros.description);
    }

    async findAll(): Promise<Maestros[]> {
        const maestroses: IMaestrosDocument[] = await MaestrosModel.find();
        return maestroses.map(maestros => new Maestros(maestros.id, maestros.name, maestros.description));
    }

    async update(maestros: Maestros): Promise<Maestros> {
        const updatedMaestros = await MaestrosModel.findByIdAndUpdate(maestros.id, maestros, { new: true });
        if (!updatedMaestros) throw new Error('Maestros not found');
        return new Maestros(updatedMaestros.id, updatedMaestros.name, updatedMaestros.description);
    }

    async deleteById(id: string): Promise<void> {
        await MaestrosModel.findByIdAndDelete(id);
    }
}

export default MongoMaestrosRepository;
