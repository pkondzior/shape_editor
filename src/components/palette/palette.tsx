import * as React from "react";
import * as models from "../../models.ts";
import {PaletteItem} from "../palette_item/palette_item.tsx";

export class Palette extends React.Component<void, {}> {
    render() {
        return <div className="palette">
            <PaletteItem shapeModel={models.Circle} />
            <PaletteItem shapeModel={models.Triangle} />
            <PaletteItem shapeModel={models.Square} />
        </div>;
    }
}