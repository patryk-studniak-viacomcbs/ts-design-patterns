import{ToolTypeFactory} from "./ToolTypeFactory.js";
import {ColorFactory} from "./ColorFactory.js";


export class ToolFactory {

    public static createToolType = () => {
        return new ToolTypeFactory();
    }

    public static crateToolColor = () => {
        return new ColorFactory();
    }

}

