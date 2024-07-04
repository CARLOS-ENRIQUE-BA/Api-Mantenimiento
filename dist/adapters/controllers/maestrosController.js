"use strict";
// src/adapters/controllers/maestrosController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaestrosById = exports.updateMaestros = exports.getAllMaestroses = exports.getMaestrosById = exports.createMaestros = void 0;
const maestrosService_1 = require("../../application/services/maestrosService"); // Verifica la importación aquí
const createMaestros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const maestros = yield maestrosService_1.MaestrosService.createMaestros(name, description);
        res.status(201).json(maestros);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createMaestros = createMaestros;
const getMaestrosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const maestros = yield maestrosService_1.MaestrosService.getMaestrosById(id);
        if (!maestros) {
            res.status(404).json({ message: 'Maestros not found' });
        }
        else {
            res.status(200).json(maestros);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getMaestrosById = getMaestrosById;
const getAllMaestroses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const maestroses = yield maestrosService_1.MaestrosService.getAllMaestroses();
        res.status(200).json(maestroses);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllMaestroses = getAllMaestroses;
const updateMaestros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedMaestros = yield maestrosService_1.MaestrosService.updateMaestros(id, name, description);
        res.status(200).json(updatedMaestros);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateMaestros = updateMaestros;
const deleteMaestrosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield maestrosService_1.MaestrosService.deleteMaestrosById(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteMaestrosById = deleteMaestrosById;
