const check = document.getElementById("checkbox");

check.addEventListener("change", myCheck);

function myCheck(e){
    document.body.classList.toggle('dark');
}