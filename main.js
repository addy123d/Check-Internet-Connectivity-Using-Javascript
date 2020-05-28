const messageBox = document.getElementById("connect-message");
const message = document.getElementById("message");



window.addEventListener("online",(e)=>{
    console.log("All good !")
    messageBox.style.top = "0%";
    messageBox.style.background = "greenyellow";
    message.textContent = "Connectivity Established !";
    // alert("online");
},false);


window.addEventListener("offline",(e)=>{
    console.log("All good !")
    messageBox.style.top = "0%";
    messageBox.style.background = "red";
    message.textContent = "You Lost Your Internet Connectivity !";
    // alert("online");
},false);