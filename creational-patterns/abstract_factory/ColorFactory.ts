enum AvailableColors {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}

export interface IColorFactory {
    createColor: (color: string) => void
}



export class ColorFactory implements IColorFactory {
    createColor(color: string){
        if(color in  AvailableColors){
            console.log("Selected color", color);
        }
        else{
            console.log("Color doesn't exist !!!");
        }
    }
}
