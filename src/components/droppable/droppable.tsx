import * as React from "react";
import {DropTarget, ConnectDropTarget, DropTargetConnector, DropTargetMonitor, ClientOffset} from "react-dnd";

interface Props {
  onDrop: (item: Object, clientOffset: ClientOffset, didDrop: boolean) => void;
}

interface DropTargetProps {
  connectDropTarget: ConnectDropTarget;
  isOver: boolean;
}

class DroppableComponent extends React.Component<Props & DropTargetProps, any> {
  public render(): JSX.Element {
    return this.props.connectDropTarget(React.Children.only(this.props.children));
  }
}

const dropTargetSpec = {
  drop: (props: Props, monitor: DropTargetMonitor) => {
    if (props.onDrop != null) {
      props.onDrop(monitor.getItem(), monitor.getClientOffset(), monitor.didDrop());
    }
  },
};

function dropTargetProps(connect: DropTargetConnector, monitor: DropTargetMonitor): DropTargetProps {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

export const Droppable = DropTarget("palette_item", dropTargetSpec, dropTargetProps)(DroppableComponent);
