import * as React from "react";
import {Palette} from "../palette/palette.tsx";
import {PaletteDragLayer} from "../palette/palette_drag_layer.tsx"
import {DrawingCanvas} from "../../redux/containers/drawing_canvas.ts";
import {DragDropContext, Backend} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

export class Editor extends React.Component<{}, void> {
    render() {
        return <div className="editor">
            <Palette />
            <PaletteDragLayer />
            <DrawingCanvas />
        </div>;
    }
}

export const EditorDragAndDropContext = DragDropContext(HTML5Backend)(Editor);