"use strict";
exports.__esModule = true;
var ToolFactory_1 = require("./ToolFactory");
var red = ToolFactory_1.ToolFactory.crateToolColor();
var pen = ToolFactory_1.ToolFactory.createToolType();
pen.createToolType("PEN");
red.createColor("RED");
