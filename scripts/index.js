// 


let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cat2.png") {
        myImage.setAttribute("src", "images/cat1.png");
    } else {
        myImage.setAttribute("src", "images/cat2.png");
    }
}

let myButton = document.querySelector("button");
let myHead = document.querySelector("h1");

function setUserName() {
    let myName = prompt("input your name please.");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHead.textContent = " N I C E :" + myName;
    }
}

myButton.onclick = function () {
    setUserName();
};