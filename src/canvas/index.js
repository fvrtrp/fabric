import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import { addrect, addtextbox } from './components';
import './index.scss';

export default function Canvas(props) {
    
    //Right after component mounts
    useEffect(() => {
        const canvas = new fabric.Canvas("app-canvas");
        loadCanvasState(canvas);

        // Cleanup before unmounting
        return () => {
          canvas.dispose();
        };
    }, []);

    const loadCanvasState = (canvas) => {
        canvas.setDimensions({ width: 800, height: 500 });

        canvas.add((addtextbox()));
        canvas.add(addrect());
    }
    


    return (
        <div className="canvasContainer">
            <canvas id="app-canvas" />
        </div>
    )
}
