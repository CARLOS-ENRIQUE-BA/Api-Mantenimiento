"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaestrosService = void 0;
const maestros_1 = __importDefault(require("../../domain/models/maestros"));
class MaestrosService {
    constructor(maestrosRepository) {
        MaestrosService.maestrosRepository = maestrosRepository;
    }
    static createMaestros(name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const maestros = new maestros_1.default(null, name, description);
            return yield MaestrosService.maestrosRepository.save(maestros);
        });
    }
    static getMaestrosById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MaestrosService.maestrosRepository.findById(id);
        });
    }
    static getAllMaestroses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MaestrosService.maestrosRepository.findAll();
        });
    }
    static updateMaestros(id, name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const maestros = new maestros_1.default(id, name, description);
            return yield MaestrosService.maestrosRepository.update(maestros);
        });
    }
    static deleteMaestrosById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MaestrosService.maestrosRepository.deleteById(id);
        });
    }
}
exports.MaestrosService = MaestrosService;
