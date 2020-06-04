const profilePic = document.getElementById("profilePic");
profilePic.addEventListener("click", (e) => {
  console.log(e.target.src);
  if (e.target.src.includes("pic-1-m.png")) {
    e.target.src = e.target.src.replace("pic-1-m.png", "pic-2-m.png");
  } else {
    e.target.src = e.target.src.replace("pic-2-m.png", "pic-1-m.png");
  }
});

var objDiv = document.querySelector(".chatContainer");
objDiv.scrollTop = objDiv.scrollHeight;