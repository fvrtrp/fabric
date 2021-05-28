export const remoteApiCall = () => {
//mock state
    const state = {
        canvasConfig: {
            width: 800, height: 500
        },
        components: [
            {
                type: 'textbox',
                fontSize: 20,
                left: 50,
                top: 100,
                width: 200,
            },
            {
                type: 'rect',
                width: 50,
                height: 50,
                fill: "blue",
                angle: 10,
                top: 20,
                left: 20,
            }
        ]
    }

    return state;
}