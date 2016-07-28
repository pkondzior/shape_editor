import * as React from "react";
import {Palette} from "../palette/palette.tsx";
import {DrawingCanvas} from "../drawing_canvas/drawing_canvas.tsx";

export class Editor extends React.Component<void, {}> {
    render() {
        return <div className="editor">
            <Palette />
            <DrawingCanvas />
        </div>;
    }
}