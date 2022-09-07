"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const input_1 = require("../../components/input/input");
const login_hbs_1 = __importDefault(require("./login.hbs"));
class Login extends Block_1.default {
    constructor(props) {
        super('div', props);
    }
    init() {
        this.children.inputLogin = new input_1.Input(Object.assign({}, this.props.inputs[0]));
        this.children.inputPassword = new input_1.Input(Object.assign({}, this.props.inputs[1]));
        // this.children.input2 = new Input({
        //   name: 'логин',
        //   key: 'login',
        //   type: 'text',
        //   common: true,
        // });
    }
    render() {
        return this.compile(login_hbs_1.default, this.props);
    }
}
exports.Login = Login;
