var config = {
    "mqtt": {
        "address": "", 
        "topics": [
            "/distances/left", 
            "/distances/center", 
            "/distances/right"
        ]
    }, 
    "video": {
        "address": "", 
        "width": 640,
        "height": 480
    }
};

export default config;
export {config};