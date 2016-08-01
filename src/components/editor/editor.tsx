import * as React from "react";
import {Palette} from "../palette/palette.tsx";
import {DrawingCanvas} from "../../redux/containers/drawing_canvas.ts";

export class Editor extends React.Component<{}, void> {
    render() {
        return <div className="editor">
            <Palette />
            <DrawingCanvas />
        </div>;
    }
}