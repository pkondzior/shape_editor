import * as React from "react";
import * as models from "../../models.ts";
import {DraggablePaletteItem} from "../palette_item/dragabble_palette_item.tsx";

export class Palette extends React.Component<void, {}> {
    render() {
        return <div className="palette">
            <DraggablePaletteItem shapeModel={models.Circle} key="circle" />
            <DraggablePaletteItem shapeModel={models.Triangle} key="triangle" />
            <DraggablePaletteItem shapeModel={models.Square} key="square" />
        </div>;
    }
}