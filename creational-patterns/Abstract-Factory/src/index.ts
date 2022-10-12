import {ToolFactory} from "./ToolFactory";
import {availableShapes, availableColors, availableDrawingTools} from "./enums";


const redPEN = ToolFactory.createDrawTool();

redPEN.createColor(availableColors.RED);
redPEN.createType(availableDrawingTools.PEN);

const blueCircle = ToolFactory.createShapeTool();

blueCircle.createColor(availableColors.BLUE);
blueCircle.createType(availableShapes.CIRCLE);