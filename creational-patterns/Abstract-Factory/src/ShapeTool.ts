import {IToolFactory} from "./ToolFactory";
import {availableShapes, availableColors} from "./enums";

export class ShapeTool implements IToolFactory{
    createType(type: string): string {
        if(type in  availableShapes){
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