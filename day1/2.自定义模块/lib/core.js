function plus(num1, num2) {
    return num1 + num2
}

// 导出
module.exports = {
    plus: plus,
    mult: function (num1, num2) {
        return num1 * num2
    }
}