import {ToolFactory} from "../src/ToolFactory"
import {availableShapes, availableColors} from "../src/enums";

describe("Should return shape tool", () => {

    const shapeCircle = ToolFactory.createShapeTool().createType(availableShapes.CIRCLE);
    const circleColor = ToolFactory.createShapeTool().createColor(availableColors.BLUE);
    const blueCircle = circleColor + " " + shapeCircle;

    it('Should return pen tool', () => {
        expect(shapeCircle).toEqual(availableShapes.CIRCLE);
    });

    it('Should return red color', () => {
        expect(circleColor).toEqual(availableColors.BLUE);
    });

    it('Should return red pen', () => {
        expect(blueCircle).toEqual(availableColors.BLUE + " " + availableShapes.CIRCLE);
    })
});