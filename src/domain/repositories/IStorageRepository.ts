export interface IStorageRepository {
    upload(file: Express.Multer.File): Promise<string>;
}