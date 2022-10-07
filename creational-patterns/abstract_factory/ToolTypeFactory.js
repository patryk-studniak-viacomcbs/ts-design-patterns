"use strict";
exports.__esModule = true;
exports.ToolTypeFactory = exports.ToolTypes = void 0;
var ToolTypes;
(function (ToolTypes) {
    ToolTypes["PEN"] = "PEN";
    ToolTypes["SPLINE"] = "SPLINE";
    ToolTypes["CIRCLE"] = "CIRCLE";
})(ToolTypes = exports.ToolTypes || (exports.ToolTypes = {}));
var ToolTypeFactory = /** @class */ (function () {
    function ToolTypeFactory() {
    }
    ToolTypeFactory.prototype.createToolType = function (toolType) {
        if (toolType in ToolTypes) {
            console.log("Selected color", toolType);
        }
        else {
            console.log("Color doesn't exist !!!");
        }
    };
    return ToolTypeFactory;
}());
exports.ToolTypeFactory = ToolTypeFactory;
