const socket = io("http://localhost:8000");

const form = document.getElementById("send-form");
const messageInput = document.getElementById("msgInp");
const userName = document.querySelector(".userName");
const chatContainer = document.querySelector(".chatContainer");
var notification = new Audio('Notification.mp3')

const name = prompt("Enter your name to join");
userName.innerHTML = name;
socket.emit("new-user-joined", name);

socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "left");
});

socket.on("receive", (data) => {
  append(`${data.name} : ${data.message} `, "left");
});

socket.on("left", (name) => {
  append(`${name} left the chat`, "left");
});

const send = () => {document.getElementById("sendBtn").click}


messageInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("sendBtn").click();
  }
});

document.getElementById("sendBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (!message) return;
  append(`You : ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});

const append = (message, position) => {
  const ele = document.createElement("div");
  ele.innerText = message;
  ele.classList.add("message");
  ele.classList.add(position);
  chatContainer.append(ele);
  if(position === 'left') notification.play()
  chatContainer.scrollTop = chatContainer.scrollHeight;
};
