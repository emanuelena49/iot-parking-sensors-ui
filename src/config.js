var config = {
    "mqtt": {
        "address": "mqtt://192.168.1.133:8883", 
        "topics": {
            "left": "ultrasonic/0", 
            "center": "ultrasonic/1", 
            "right": "ultrasonic/2"
        }
    }, 
    "video": {
        //"address": "https://images2-corrieredelveneto.corriereobjects.it/methode_image/2021/03/23/Treviso%20Belluno/Foto%20Trattate/accoltellamento%20mogliano-kHv-U460802138672084hjB-640x480@CorriereVeneto-Web-Veneto.jpg?v=202103240900", 
        "address": "http://192.168.1.133:8081",
        "width": 640,
        "height": 480
    }
};

export default config;
export {config};