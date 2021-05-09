import TokenType from "./TokenType";

export default class Token {
    type: TokenType;
    text: string;
    pos: number;


    constructor(type: TokenType, text: string, pos: number) {
        this.type = type;
        this.text = text;
        this.pos = pos;
    }

}
