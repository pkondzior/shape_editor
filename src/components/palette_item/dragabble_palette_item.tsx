import * as React from "react";
import * as models from "../../models/shapes.ts";
import {
  DragSource, ConnectDragSource, ConnectDragPreview, DragSourceConnector, DragSourceMonitor, DragSourceSpec,
} from "react-dnd";
import {getEmptyImage} from "react-dnd-html5-backend";
import {PaletteItem} from "./palette_item.tsx";


export interface Props {
  shapeModel: any;
}

export interface DraggableProps {
  shapeModel: any;
}

const dragSourceSpec: DragSourceSpec<Props> = {
  beginDrag(props: Props): DraggableProps {
    return {
      shapeModel: props.shapeModel,
    };
  },
};

interface DragSourceProps {
  connectDragSource: ConnectDragSource;
  connectDragPreview: ConnectDragPreview;
  isDragging: boolean;
}

function dragSourceProps(connect: DragSourceConnector, monitor: DragSourceMonitor): DragSourceProps {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

export class DraggablePaletteItemComponent extends React.Component<Props & DragSourceProps, void> {
  public componentDidMount(): void {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }

  public render(): JSX.Element {
    const {isDragging, connectDragSource, shapeModel} = this.props;
    return <PaletteItem shapeModel={shapeModel} isDragging={isDragging} connectDragSource={connectDragSource} />;
  }
}

export const DraggablePaletteItem = DragSource("dragabble_palette_item", dragSourceSpec, dragSourceProps)(DraggablePaletteItemComponent);
