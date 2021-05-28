import { fabric } from "fabric";

export const addrect = (style={}) => {
    return new fabric.Rect({
        ...style,
    });
}

export const addtextbox = (style={}) => {
    return new fabric.Textbox("I am a textbox", {
        ...style,
    });
}