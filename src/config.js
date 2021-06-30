var config = {
    "mqtt": {
        "address": "", 
        "topics": {
            "left": "/distances/left", 
            "center": "/distances/center", 
            "right": "/distances/right"
        }
    }, 
    "video": {
        "address": "", 
        "width": 640,
        "height": 480
    }
};

export default config;
export {config};