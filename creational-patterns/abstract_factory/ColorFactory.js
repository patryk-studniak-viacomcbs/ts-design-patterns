"use strict";
exports.__esModule = true;
exports.ColorFactory = void 0;
var AvailableColors;
(function (AvailableColors) {
    AvailableColors["RED"] = "RED";
    AvailableColors["GREEN"] = "GREEN";
    AvailableColors["BLUE"] = "BLUE";
})(AvailableColors || (AvailableColors = {}));
var ColorFactory = /** @class */ (function () {
    function ColorFactory() {
    }
    ColorFactory.prototype.createColor = function (color) {
        if (color in AvailableColors) {
            console.log("Selected color", color);
        }
        else {
            console.log("Color doesn't exist !!!");
        }
    };
    return ColorFactory;
}());
exports.ColorFactory = ColorFactory;
