"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const button_hbs_1 = __importDefault(require("./button.hbs"));
class Button extends Block_1.default {
    constructor(props) {
        super('div', props);
    }
    render() {
        return this.compile(button_hbs_1.default, this.props);
    }
}
exports.Button = Button;
