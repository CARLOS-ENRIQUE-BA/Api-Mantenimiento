// src/adapters/controllers/maestrosController.ts

import { Request, Response } from 'express';
import { MaestrosService } from '../../application/services/maestrosService'; // Verifica la importación aquí

export const createMaestros = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    try {
        const maestros = await MaestrosService.createMaestros(name, description);
        res.status(201).json(maestros);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getMaestrosById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const maestros = await MaestrosService.getMaestrosById(id);
        if (!maestros) {
            res.status(404).json({ message: 'Maestros not found' });
        } else {
            res.status(200).json(maestros);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllMaestroses = async (req: Request, res: Response) => {
    try {
        const maestroses = await MaestrosService.getAllMaestroses();
        res.status(200).json(maestroses);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMaestros = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedMaestros = await MaestrosService.updateMaestros(id, name, description);
        res.status(200).json(updatedMaestros);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMaestrosById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await MaestrosService.deleteMaestrosById(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
