"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var e_1, _a;
var text = "Booh! 👻";
try {
    for (var text_1 = __values(text), text_1_1 = text_1.next(); !text_1_1.done; text_1_1 = text_1.next()) {
        var char = text_1_1.value;
        console.log(char);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (text_1_1 && !text_1_1.done && (_a = text_1.return)) _a.call(text_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=index.js.map