import {MouseEvent} from "react"

export function getRelativeEventCordinates(element: Element, event: MouseEvent) {
  const boundingRect = element.getBoundingClientRect();
  return {
    x: event.clientX - boundingRect.left,
    y: event.clientY - boundingRect.top
  };
}