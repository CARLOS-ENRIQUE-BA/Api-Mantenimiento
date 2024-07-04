import { IStorageRepository } from '../../domain/repositories/IStorageRepository';

export class StorageService {
    constructor(private storageRepository: IStorageRepository) {}

    async upload(file: Express.Multer.File): Promise<string> {
        return this.storageRepository.upload(file);
    }
}