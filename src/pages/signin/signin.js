"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const input_1 = require("../../components/input/input");
const button_1 = require("../../components/button/button");
const signin_hbs_1 = __importDefault(require("./signin.hbs"));
class SignIn extends Block_1.default {
    constructor(props) {
        super('div', props);
    }
    init() {
        this.props.buttons.forEach((button, index) => {
            this.children[button.componentName] = new button_1.Button(Object.assign({}, this.props.buttons[index]));
        });
        this.props.inputs.forEach((input, index) => {
            this.children[input.componentName] = new input_1.Input(Object.assign({}, this.props.inputs[index]));
        });
    }
    render() {
        return this.compile(signin_hbs_1.default, this.props);
    }
}
exports.SignIn = SignIn;
