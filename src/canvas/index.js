import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import { addrect, addtextbox } from './components';
import './index.scss';
import { remoteApiCall } from './api';

export default function Canvas(props) {
    const canvasRef = useRef();
    const [canvas, setCanvas] = useState(null);
    //Right after component mounts
    useEffect(() => {
        const canvas = new fabric.Canvas("app-canvas");
        setCanvas(canvas);
        loadCanvasState(canvas);

        // Cleanup before unmounting
        return () => {
          canvas.dispose();
        };
    }, []);

    const loadCanvasState = (canvas) => {
        const canvasState = remoteApiCall();
        const { canvasConfig, components }  = canvasState;
        canvas.setDimensions({ width: canvasConfig.width, height: canvasConfig.height });

        components.forEach(i => {
            switch(i.type) {
                case 'textbox': {
                    canvas.add(addtextbox(i));
                    break;
                }
                case 'rect': {
                    canvas.add(addrect(i));
                }
                default: break;
            }
        })
    }

    const exportAs = () => {
        alert(canvas.toSVG());
    }
    


    return (
        <>
            <div className="canvasContainer">
                <canvas id="app-canvas" ref={canvasRef} />
            </div>
            <button onClick={exportAs}>Export as svg</button>
        </>
    )
}
