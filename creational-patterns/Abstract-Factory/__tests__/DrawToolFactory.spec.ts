import {ToolFactory} from "../src/ToolFactory";
import {availableColors, availableDrawingTools} from "../src/enums";

describe("Should return draw tool", () => {

    const drawPen = ToolFactory.createDrawTool().createType(availableDrawingTools.PEN);
    const penColor = ToolFactory.createDrawTool().createColor(availableColors.RED);
    const redPen = penColor + " " + drawPen;

    it('Should return pen tool', () => {
        expect(drawPen).toEqual(availableDrawingTools.PEN);
    });

    it('Should return red color', () => {
        expect(penColor).toEqual(availableColors.RED);
    });

    it('Should return red pen', () => {
        expect(redPen).toEqual(availableColors.RED + " " + availableDrawingTools.PEN);
    })
});