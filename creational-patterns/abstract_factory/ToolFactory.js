"use strict";
exports.__esModule = true;
exports.ToolFactory = void 0;
var ToolTypeFactory_js_1 = require("./ToolTypeFactory.js");
var ColorFactory_js_1 = require("./ColorFactory.js");
var ToolFactory = /** @class */ (function () {
    function ToolFactory() {
    }
    ToolFactory.createToolType = function () {
        return new ToolTypeFactory_js_1.ToolTypeFactory();
    };
    ToolFactory.crateToolColor = function () {
        return new ColorFactory_js_1.ColorFactory();
    };
    return ToolFactory;
}());
exports.ToolFactory = ToolFactory;
