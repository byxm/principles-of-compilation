const TokenType = require("./TokenType");

class Token {
  constructor(type, value) {
    this._type = type;
    this._value = value;
  }

  getType() {
    return this._type;
  }

  getValue() {
    return this._value;
  }

  isVariable() {
    return this._type === TokenType.VARIABLE;
  }

  /**
   * 这里判断类型的时候使用的是对象，之所以用对象是因为对象比较的成本比较，是直接比较的寄存器中的地址
   * 而字符串需要整个值进行比较。并且对象的比较如果一直用的话会缓存在CPU的内存里面提升效率
   */
  isScalar() {
    return (
      this._type === TokenType.BOOLEAN ||
      this._type === TokenType.FLOAT ||
      this._type === TokenType.STRING ||
      this._type === TokenType.INTEGER
    );
  }

  toString() {
      return `type ${this._type}, value ${this._value}`
  }
}
