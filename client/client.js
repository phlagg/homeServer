console.log("Hello");
const form = document.querySelector('buzz_off');

var mcuSocket = new WebSocket("ws:192.168.0.10:443");
   
// form.addEventListener('click', (event) => {
    
//     buzzNow();
    
// });



// exampleSocket.close();

function buzzNow() {
    buzzOn();
    setTimeout(
        () => {
        buzzOff();
          
        },
        500
      );
    
}

function buzzOn() {
    console.log("BUZZZZZ");
    mcuSocket.send("#0");
   
}
function buzzOff() {
   
    console.log("UNBUZZZZZ");
    mcuSocket.send("#3ff");
}