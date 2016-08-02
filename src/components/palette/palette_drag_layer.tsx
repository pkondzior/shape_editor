import * as React from "react";
import {DragLayer} from "react-dnd";
import {ClientOffset, DragSourceMonitor} from "react-dnd";
import {PaletteItem} from "../palette_item/palette_item.tsx";
import {DraggableProps} from "../palette_item/dragabble_palette_item.tsx";

interface Props {
  initialSourceClientOffset: ClientOffset;
  item: Object;
  sourceClientOffset: ClientOffset;
  didDrop: boolean;
}

class PaletteDragLayerComponent extends React.Component<Props, void> {
  private draggedItem: DraggableProps;
  private draggedInitialSourceClientOffset: ClientOffset;

  public componentWillReceiveProps(nextProps: Props): void {
    if (this.props.initialSourceClientOffset != null && nextProps.initialSourceClientOffset == null) {
      this.draggedItem = this.props.item as DraggableProps;
      this.draggedInitialSourceClientOffset = this.props.initialSourceClientOffset;
    }
  }

  public render(): JSX.Element {
    const item = (this.props.item || this.draggedItem) as DraggableProps;

    const html = (
      <div className="palette-drag-layer">
        {!this.props.didDrop && item && item.shapeModel &&
          <div className="palette-drag-layer--preview"
            style={this.getItemStyles(this.props)} onTransitionEnd={(e: TransitionEvent) => this.forceUpdate()}>
            <PaletteItem shapeModel={(item as DraggableProps).shapeModel} shapeColor={(item as DraggableProps).shapeColor} isPreview={true} />
          </div>}
      </div>);
    this.draggedItem = null;
    this.draggedInitialSourceClientOffset = null;
    return html;
  }

  private getItemStyles(props: Props): Object {
    const {sourceClientOffset, initialSourceClientOffset} = props;

    const styles = {};
    if (!initialSourceClientOffset && this.draggedInitialSourceClientOffset) {
      Object.assign(styles, { transition: "transform 150ms linear" });
    }

    const left = (initialSourceClientOffset && initialSourceClientOffset.x)
      || (this.draggedInitialSourceClientOffset && this.draggedInitialSourceClientOffset.x)
      || 0;
    const top = (initialSourceClientOffset && initialSourceClientOffset.y)
      || (this.draggedInitialSourceClientOffset && this.draggedInitialSourceClientOffset.y)
      || 0;

    Object.assign(styles, { height: 50, left: left, top: top, width: 50 });

    const x = sourceClientOffset ? sourceClientOffset.x - left : 0;
    const y = sourceClientOffset ? sourceClientOffset.y - top : 0;
    const transform = `translate(${x}px, ${y}px)`;
    Object.assign(styles, {
      WebkitTransform: transform,
      transform: transform,
    });
    return styles;
  }
}

function dragLayerProps(monitor: DragSourceMonitor): Props {
  return {
    didDrop: monitor.didDrop(),
    initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
    item: monitor.getItem(),
    sourceClientOffset: monitor.getSourceClientOffset()
  };
}

export const PaletteDragLayer = DragLayer(dragLayerProps)(PaletteDragLayerComponent);
