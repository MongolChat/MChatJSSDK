class MChatSDK {

    constructor() {
        let wsUri = "wss://localhost:8791/websocket/";
        websocket = new WebSocket(wsUri);
        websocket.onopen = function(evt) { 
            console.log(evt);
        };
        websocket.onclose = function(evt) { 
            console.log(evt);
        };
        websocket.onmessage = function(evt) {
            console.log(evt);
        };
        websocket.onerror = function(evt) {
            console.log(evt);
        };
    }

}

module.exports = MChatSDK;


