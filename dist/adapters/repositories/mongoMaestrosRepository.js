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
const maestros_1 = __importDefault(require("../../domain/models/maestros"));
const maestrosSchema_1 = require("./schemas/maestrosSchema");
class MongoMaestrosRepository {
    save(maestros) {
        return __awaiter(this, void 0, void 0, function* () {
            const maestrosModel = new maestrosSchema_1.MaestrosModel(maestros);
            const savedMaestros = yield maestrosModel.save();
            return new maestros_1.default(savedMaestros.id, savedMaestros.name, savedMaestros.description);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const maestros = yield maestrosSchema_1.MaestrosModel.findById(id);
            if (!maestros)
                return null;
            return new maestros_1.default(maestros.id, maestros.name, maestros.description);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const maestroses = yield maestrosSchema_1.MaestrosModel.find();
            return maestroses.map(maestros => new maestros_1.default(maestros.id, maestros.name, maestros.description));
        });
    }
    update(maestros) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedMaestros = yield maestrosSchema_1.MaestrosModel.findByIdAndUpdate(maestros.id, maestros, { new: true });
            if (!updatedMaestros)
                throw new Error('Maestros not found');
            return new maestros_1.default(updatedMaestros.id, updatedMaestros.name, updatedMaestros.description);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield maestrosSchema_1.MaestrosModel.findByIdAndDelete(id);
        });
    }
}
exports.default = MongoMaestrosRepository;
