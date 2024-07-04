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
exports.LocalStorageRepository = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class LocalStorageRepository {
    constructor() {
        this.storagePath = path_1.default.join(__dirname, '../../../uploads');
        if (!fs_1.default.existsSync(this.storagePath)) {
            fs_1.default.mkdirSync(this.storagePath, { recursive: true });
        }
    }
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = path_1.default.join(this.storagePath, `${Date.now()}-${file.originalname}`);
            yield fs_1.default.promises.writeFile(filePath, file.buffer);
            return filePath;
        });
    }
}
exports.LocalStorageRepository = LocalStorageRepository;
