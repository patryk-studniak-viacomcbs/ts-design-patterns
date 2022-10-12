import {IToolFactory} from "./ToolFactory";
import {availableDrawingTools, availableColors} from "./enums";

export class DrawTool implements IToolFactory{
    createType(type: string): string {
        if(type in  availableDrawingTools){
            console.log(type);
            return type;
        }
        else{
            console.log("Color doesnt match");
            return("Color doesnt match");
        }
    };

    createColor(color: string): string {
        if(color in  availableColors){
            console.log(color);
            return color;
        }
        else{
            console.log("Color doesnt match");
            return("Color doesnt match");
        }
    };

}
