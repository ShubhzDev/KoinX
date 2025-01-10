"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deviationController_1 = __importDefault(require("../controllers/deviationController"));
const statsController_1 = __importDefault(require("../controllers/statsController"));
const router = express_1.default.Router();
router.get('/stats/:coin', statsController_1.default);
router.get('/deviation/:coin', deviationController_1.default);
exports.default = router;
