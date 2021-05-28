import { fabric } from "fabric";

export const addrect = (style={}) => {
    return new fabric.Rect({
        width: 50,
        height: 50,
        fill: "blue",
        angle: 10,
        top: 20,
        left: 20
    });
}

export const addtextbox = (style={}) => {
    return new fabric.Textbox("I am a textbox", {
        fontSize: 20,
        left: 50,
        top: 100,
        width: 200
    });
}