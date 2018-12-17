// Listen for messages
browser.runtime.onMessage.addListener(receiver);
const body = document.querySelector("body");

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
    body.classList.toggle("my-beautiful-extension");
  } else {
    //do else
    body.classList.toggle("my-beautiful-extension");
  }
}
