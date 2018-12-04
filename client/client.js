const form = document.querySelector('buzz_off');

var mcuSocket = new WebSocket("ws:192.168.0.10:443");
   
// form.addEventListener('click', (event) => {
    
//     buzzNow();
    
// });



// exampleSocket.close();
mcuSocket.onmessage = function(msgevent) {
    var msg = msgevent.data;
    switch (msg) {
        case "BUZZ Received":
            console.log('in :', msg);
            break;
        case "BUZZER":
            alert("You're Being Buzzed!");
            break;
        default:
    
    }
    
};




function buzzNow() {
    // console.log("BUZZZZZ");
    mcuSocket.send("B");
}


