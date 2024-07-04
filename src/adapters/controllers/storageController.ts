import { Request, Response } from 'express';
import { StorageService } from '../../application/services/storageService';

export class StorageController {
    constructor(private storageService: StorageService) {}

    upload = async (req: Request, res: Response) => {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        try {
            const fileUrl = await this.storageService.upload(req.file);
            res.json({ fileUrl });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred');
            }
        }
    };
}