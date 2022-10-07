export enum ToolTypes {
    PEN = "PEN",
    SPLINE="SPLINE",
    CIRCLE="CIRCLE"
}

export interface IToolTypeFactory {
    createToolType : (toolType: string) => void
}


export class ToolTypeFactory implements IToolTypeFactory {
    createToolType(toolType: string){
        if(toolType in  ToolTypes){
            console.log("Selected color", toolType);
        }
        else{
            console.log("Color doesn't exist !!!");
        }
    }
}