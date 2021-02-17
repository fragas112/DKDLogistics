"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MobileNav_1 = require("../MobileNav/");
var MobileNav = function (_a) {
    var children = _a.children;
    // console.log(children);
    var _b = react_1.useState('close'), status = _b[0], setStatus = _b[1];
    var _c = react_1.useState(false), burger = _c[0], setBurger = _c[1];
    return (react_1["default"].createElement("div", { className: MobileNav_1["default"].BurgerMenu__container, onClick: function () { return setStatus(status === 'open' ? 'close' : 'open'); }, role: "button" },
        react_1["default"].createElement("i", { className: MobileNav_1["default"][status] }),
        react_1["default"].createElement("i", { className: MobileNav_1["default"][status] }),
        react_1["default"].createElement("i", { className: MobileNav_1["default"][status] }),
        status === 'open' ? react_1["default"].createElement(react_1["default"].Fragment, null, children) : null));
};
exports["default"] = MobileNav;
