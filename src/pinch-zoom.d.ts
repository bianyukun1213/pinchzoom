type PinchZoomEventHandler = (target: PinchZoom, event: TouchEvent) => void;

declare interface IPinchZoomOptions {
    tapZoomFactor?: number;
    zoomOutFactor?: number;
    animationDuration?: number;
    maxZoom?: number;
    minZoom?: number;
    listenOnElementNotContainer?: boolean;
    draggableUnzoomed?: boolean;
    lockDragAxis?: boolean;
    setOffsetsOnce?: boolean;
    use2d?: boolean;
    useMouseWheel?: boolean;
    useDoubleTap?: boolean;
    verticalPadding?: number;
    horizontalPadding?: number;
    rtl?: boolean;

    onZoomStart?: PinchZoomEventHandler;
    onZoomEnd?: PinchZoomEventHandler;
    onZoomUpdate?: PinchZoomEventHandler;
    onDragStart?: PinchZoomEventHandler;
    onDragEnd?: PinchZoomEventHandler;
    onDragUpdate?: PinchZoomEventHandler;
    onDoubleTap?: PinchZoomEventHandler;

    zoomStartEventName?: string;
    zoomUpdateEventName?: string;
    zoomEndEventName?: string;
    dragStartEventName?: string;
    dragUpdateEventName?: string;
    dragEndEventName?: string;
    doubleTapEventName?: string;
}

declare class PinchZoom {
    constructor(element: HTMLElement, options?: IPinchZoomOptions);
    public enable(): void;
    public disable(): void;
    public destroy(): void;
}

export default PinchZoom;
