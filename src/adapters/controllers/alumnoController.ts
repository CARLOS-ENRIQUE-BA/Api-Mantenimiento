// src/adapters/controllers/alumnoController.ts
import { Request, Response } from 'express';
import { alumnoService } from '../../infrastructure/diContainer';

export const createAlumno = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
        console.log("Request to create alumno:", name, email);
        const alumno = await alumnoService.createAlumno(name, email, password);
        res.status(201).json(alumno);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in createAlumno:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getAlumnoById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        console.log("Request to get alumno by ID:", id);
        const alumno = await alumnoService.getAlumnoById(id);
        res.status(200).json(alumno);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in getAlumnoById:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getAllAlumnos = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Request to get all alumnos");
        const alumnos = await alumnoService.getAllAlumnos();
        res.status(200).json(alumnos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in getAllAlumnos:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const updateAlumno = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        console.log("Request to update alumno:", id, name, email);
        const alumno = await alumnoService.updateAlumno(id, name, email, password);
        res.status(200).json(alumno);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in updateAlumno:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const deleteAlumnoById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        console.log("Request to delete alumno by ID:", id);
        await alumnoService.deleteAlumnoById(id);
        res.status(204).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in deleteAlumnoById:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
