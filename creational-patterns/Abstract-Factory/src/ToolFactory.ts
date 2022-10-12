import {DrawTool} from "./DrawTool";
import {ShapeTool} from "./ShapeTool";

export interface IToolFactory {
    createType(type: string): string,
    createColor(color: string): string,
}


export class ToolFactory{
    public  static createShapeTool(): IToolFactory {
        return new ShapeTool();
    }

    public  static createDrawTool(): IToolFactory {
        return new DrawTool();
    }
}

