console.log("running script.js!");

function submitOnClick(){
    let emailInputElement = document.getElementsByTagName("input")[0];
    alert("email address submitted:" + emailInputElement.value);
}

function btnClick(){
    alert('button clicked!');
}