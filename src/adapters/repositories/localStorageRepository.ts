import { IStorageRepository } from '../../domain/repositories/IStorageRepository';
import fs from 'fs';
import path from 'path';

export class LocalStorageRepository implements IStorageRepository {
    private storagePath = path.join(__dirname, '../../../uploads');

    constructor() {
        if (!fs.existsSync(this.storagePath)) {
            fs.mkdirSync(this.storagePath, { recursive: true });
        }
    }

    async upload(file: Express.Multer.File): Promise<string> {
        const filePath = path.join(this.storagePath, `${Date.now()}-${file.originalname}`);
        await fs.promises.writeFile(filePath, file.buffer);
        return filePath;
    }
}