// 解释器的公共枚举类的定义

class Enum {

    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    toString() {
        return this.type;
    }
}

module.exports = Enum;