import { IMaestrosRepository } from '../../domain/repositories/IMaestrosRepository';
import Maestros from '../../domain/models/maestros';

export class MaestrosService {
    private static maestrosRepository: IMaestrosRepository;

    constructor(maestrosRepository: IMaestrosRepository) {
        MaestrosService.maestrosRepository = maestrosRepository;
    }

    static async createMaestros(name: string, description: string): Promise<Maestros> {
        const maestros = new Maestros(null, name, description);
        return await MaestrosService.maestrosRepository.save(maestros);
    }

    static async getMaestrosById(id: string): Promise<Maestros | null> {
        return await MaestrosService.maestrosRepository.findById(id);
    }

    static async getAllMaestroses(): Promise<Maestros[]> {
        return await MaestrosService.maestrosRepository.findAll();
    }

    static async updateMaestros(id: string, name: string, description: string): Promise<Maestros> {
        const maestros = new Maestros(id, name, description);
        return await MaestrosService.maestrosRepository.update(maestros);
    }

    static async deleteMaestrosById(id: string): Promise<void> {
        await MaestrosService.maestrosRepository.deleteById(id);
    }
}
